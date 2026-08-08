"""Small server-side gateway for the DeepSeek streaming API."""

from __future__ import annotations

import json
import logging
import os
import queue
import threading
import time
from collections.abc import Iterator, Sequence
from typing import Any

import httpx

from .profile import SYSTEM_PROMPT


MODEL = "deepseek-v4-flash"
DEFAULT_BASE_URL = "https://api.deepseek.com"
MAX_CONTEXT_MESSAGES = 12
MAX_OUTPUT_TOKENS = 700
MAX_REQUEST_TIMEOUT_SECONDS = 30.0
LOGGER = logging.getLogger(__name__)


def _request_timeout_seconds() -> float:
    """Allow tests to shorten the deadline without extending production past 30 seconds."""

    raw_value = os.getenv("DEEPSEEK_REQUEST_TIMEOUT_SECONDS")
    if not raw_value:
        return MAX_REQUEST_TIMEOUT_SECONDS
    try:
        return min(MAX_REQUEST_TIMEOUT_SECONDS, max(0.1, float(raw_value)))
    except ValueError:
        return MAX_REQUEST_TIMEOUT_SECONDS


REQUEST_TIMEOUT_SECONDS = _request_timeout_seconds()


class DeepSeekGatewayError(RuntimeError):
    """A user-safe provider failure without request/response secrets."""


class DeepSeekGateway:
    """Call DeepSeek from trusted server-side code only."""

    def __init__(
        self,
        *,
        api_key: str | None = None,
        base_url: str | None = None,
        client: httpx.Client | None = None,
    ) -> None:
        self._api_key = api_key if api_key is not None else _read_api_key()
        self._base_url = (
            base_url
            or os.getenv("DEEPSEEK_BASE_URL")
            or DEFAULT_BASE_URL
        ).rstrip("/")
        self._client = client

    @property
    def configured(self) -> bool:
        """Whether a non-empty server-side key is available."""

        return bool(self._api_key)

    def stream_reply(self, history: Sequence[dict[str, str]]) -> Iterator[str]:
        """Yield text deltas from one DeepSeek chat completion."""

        if not self._api_key:
            raise DeepSeekGatewayError(
                "AI chat is not available right now. You can still browse the portfolio, "
                "or continue on Upwork to ask Noah directly."
            )

        messages: list[dict[str, str]] = [
            {"role": "system", "content": SYSTEM_PROMPT},
        ]
        for item in list(history)[-MAX_CONTEXT_MESSAGES:]:
            role = item.get("role")
            content = item.get("content")
            if role in {"user", "assistant"} and isinstance(content, str):
                messages.append({"role": role, "content": content[:2000]})

        payload: dict[str, Any] = {
            "model": MODEL,
            "messages": messages,
            "stream": True,
            "max_tokens": MAX_OUTPUT_TOKENS,
            "thinking": {"type": "disabled"},
        }
        headers = {
            "Authorization": f"Bearer {self._api_key}",
            "Content-Type": "application/json",
            "Accept": "text/event-stream",
        }
        timeout = httpx.Timeout(
            REQUEST_TIMEOUT_SECONDS,
            connect=10.0,
            read=REQUEST_TIMEOUT_SECONDS,
            write=10.0,
            pool=10.0,
        )

        events: queue.Queue[tuple[str, str | BaseException | None]] = queue.Queue()
        cancelled = threading.Event()
        producer = threading.Thread(
            target=self._produce_stream_events,
            args=(payload, headers, timeout, events, cancelled),
            name="deepseek-http-stream",
            daemon=True,
        )
        producer.start()

        deadline = time.monotonic() + REQUEST_TIMEOUT_SECONDS
        saw_content = False
        provider_phase = "starting"
        try:
            while True:
                remaining = deadline - time.monotonic()
                if remaining <= 0:
                    LOGGER.warning(
                        "DeepSeek request exceeded the wall-clock deadline during %s",
                        provider_phase,
                    )
                    raise _timeout_error()
                try:
                    kind, value = events.get(timeout=remaining)
                except queue.Empty as exc:
                    LOGGER.warning(
                        "DeepSeek request exceeded the wall-clock deadline during %s",
                        provider_phase,
                    )
                    raise _timeout_error() from exc

                if kind == "phase" and isinstance(value, str):
                    provider_phase = value
                    continue
                if kind == "chunk" and isinstance(value, str):
                    saw_content = True
                    yield value
                    continue
                if kind == "done":
                    break
                if kind == "error" and isinstance(value, BaseException):
                    raise _public_gateway_error(value) from value

            if not saw_content:
                raise DeepSeekGatewayError(
                    "The AI service returned an empty answer. Please try again or continue on Upwork."
                )
        finally:
            cancelled.set()

    def _produce_stream_events(
        self,
        payload: dict[str, Any],
        headers: dict[str, str],
        timeout: httpx.Timeout,
        events: queue.Queue[tuple[str, str | BaseException | None]],
        cancelled: threading.Event,
    ) -> None:
        """Translate one blocking HTTP stream into internal, content-only events."""

        client = self._client
        owns_client = client is None
        if client is None:
            client = httpx.Client(timeout=timeout)

        try:
            events.put(("phase", "connecting"))
            with client.stream(
                "POST",
                f"{self._base_url}/chat/completions",
                headers=headers,
                json=payload,
                timeout=timeout,
            ) as response:
                events.put(("phase", f"response-{response.status_code}"))
                if response.status_code >= 400:
                    raise DeepSeekGatewayError(_provider_status_message(response.status_code))

                events.put(("phase", "streaming"))
                saw_content = False
                for raw_line in response.iter_lines():
                    if cancelled.is_set():
                        return
                    line = raw_line.strip() if isinstance(raw_line, str) else raw_line.decode().strip()
                    if not line or not line.startswith("data:"):
                        continue
                    data = line[5:].strip()
                    if data == "[DONE]":
                        break
                    try:
                        event = json.loads(data)
                    except json.JSONDecodeError as exc:
                        raise DeepSeekGatewayError(
                            "The AI service returned an invalid response. Please try again or continue on Upwork."
                        ) from exc
                    delta = _extract_delta(event)
                    if delta:
                        if not saw_content:
                            saw_content = True
                            events.put(("phase", "receiving-content"))
                        events.put(("chunk", delta))
        except BaseException as exc:  # Keep provider details inside the trusted process.
            if not cancelled.is_set():
                LOGGER.warning("DeepSeek provider stream failed with %s", type(exc).__name__)
                events.put(("error", exc))
        else:
            if not cancelled.is_set():
                events.put(("done", None))
        finally:
            if owns_client:
                client.close()


def _timeout_error() -> DeepSeekGatewayError:
    return DeepSeekGatewayError(
        "That took longer than expected. You can browse the static portfolio or continue on Upwork."
    )


def _public_gateway_error(error: BaseException) -> DeepSeekGatewayError:
    if isinstance(error, DeepSeekGatewayError):
        return error
    if isinstance(error, (httpx.TimeoutException, TimeoutError)):
        return _timeout_error()
    if isinstance(error, httpx.HTTPError):
        return DeepSeekGatewayError(
            "AI chat is temporarily unavailable. The static portfolio is still ready to browse."
        )
    return DeepSeekGatewayError(
        "I couldn’t generate a response right now. Please try again or continue on Upwork."
    )


def _extract_delta(event: object) -> str:
    if not isinstance(event, dict):
        return ""
    choices = event.get("choices")
    if not isinstance(choices, list) or not choices:
        return ""
    first = choices[0]
    if not isinstance(first, dict):
        return ""
    delta = first.get("delta")
    if not isinstance(delta, dict):
        return ""
    content = delta.get("content")
    return content if isinstance(content, str) else ""


def _provider_status_message(status_code: int) -> str:
    if status_code in {401, 403}:
        return "AI chat is temporarily unavailable. You can still browse the portfolio or continue on Upwork."
    if status_code == 402:
        return "AI chat is temporarily unavailable. The static portfolio is still ready to browse."
    if status_code == 429:
        return "AI chat is busy right now. Please try again in a moment or continue on Upwork."
    if status_code >= 500:
        return "AI chat is temporarily unavailable. The static portfolio is still ready to browse."
    return "AI chat could not complete that answer. Please try again or continue on Upwork."


def _read_api_key() -> str | None:
    value = os.getenv("DEEPSEEK_API_KEY")
    if value:
        return value
    try:
        import streamlit as st

        secret_value = st.secrets.get("DEEPSEEK_API_KEY")
    except Exception:
        secret_value = None
    return secret_value if isinstance(secret_value, str) and secret_value else None
