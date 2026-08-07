"""Small server-side gateway for the DeepSeek streaming API."""

from __future__ import annotations

import json
import os
from collections.abc import Iterator, Sequence
from typing import Any

import httpx

from .profile import SYSTEM_PROMPT


MODEL = "deepseek-v4-flash"
DEFAULT_BASE_URL = "https://api.deepseek.com"
MAX_CONTEXT_MESSAGES = 12
MAX_OUTPUT_TOKENS = 700
REQUEST_TIMEOUT_SECONDS = 30.0


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
                "DeepSeek is not configured right now. You can still browse the portfolio, "
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

        client = self._client
        owns_client = client is None
        if client is None:
            client = httpx.Client(timeout=timeout)

        try:
            with client.stream(
                "POST",
                f"{self._base_url}/chat/completions",
                headers=headers,
                json=payload,
                timeout=timeout,
            ) as response:
                if response.status_code >= 400:
                    raise DeepSeekGatewayError(_provider_status_message(response.status_code))

                saw_content = False
                for raw_line in response.iter_lines():
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
                            "DeepSeek returned an invalid response. Please try again or continue on Upwork."
                        ) from exc
                    delta = _extract_delta(event)
                    if delta:
                        saw_content = True
                        yield delta

                if not saw_content:
                    raise DeepSeekGatewayError(
                        "DeepSeek returned an empty answer. Please try again or continue on Upwork."
                    )
        except DeepSeekGatewayError:
            raise
        except (httpx.TimeoutException, TimeoutError) as exc:
            raise DeepSeekGatewayError(
                "That took longer than expected. You can browse the static portfolio or continue on Upwork."
            ) from exc
        except httpx.HTTPError as exc:
            raise DeepSeekGatewayError(
                "DeepSeek is temporarily unavailable. The static portfolio is still ready to browse."
            ) from exc
        except Exception as exc:  # pragma: no cover - defensive provider boundary
            raise DeepSeekGatewayError(
                "I couldn’t get a response from DeepSeek. Please try again or continue on Upwork."
            ) from exc
        finally:
            if owns_client:
                client.close()


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
        return "DeepSeek authentication needs attention. You can still browse the portfolio or continue on Upwork."
    if status_code == 402:
        return "DeepSeek balance is unavailable right now. The static portfolio is still ready to browse."
    if status_code == 429:
        return "DeepSeek is busy right now. Please try again in a moment or continue on Upwork."
    if status_code >= 500:
        return "DeepSeek is temporarily unavailable. The static portfolio is still ready to browse."
    return "DeepSeek could not complete that answer. Please try again or continue on Upwork."


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

