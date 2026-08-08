"""Streamlit entrypoint and session orchestration for Noah's AI Portfolio."""

from __future__ import annotations

import queue
import threading
from collections.abc import Mapping
from pathlib import Path
from typing import Any

import streamlit as st

from noah_portfolio import render_portfolio
from noah_portfolio.deepseek import DeepSeekGateway, DeepSeekGatewayError
from noah_portfolio.profile import PUBLIC_PROFILE, quick_message


PAGE_TITLE = "Noah Wang — AI Portfolio"
PAGE_ICON = Path(__file__).parent / "noah_portfolio" / "frontend" / "build" / "favicon.svg"
COMPONENT_KEY = "noah-ai-portfolio"
MAX_QUERY_LENGTH = 2_000


st.set_page_config(
    page_title=PAGE_TITLE,
    page_icon=PAGE_ICON,
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.html(
    """
    <style>
      header[data-testid="stHeader"],
      footer,
      #MainMenu {
        display: none;
      }
      .stApp,
      [data-testid="stAppViewContainer"],
      [data-testid="stMain"] {
        background: #fff;
      }
      [data-testid="stMainBlockContainer"] {
        max-width: none;
        padding: 0;
      }
    </style>
    """
)

st.html('<span id="deployment-probe" hidden>deploy-probe-20260808-1</span>')


def _ensure_state() -> None:
    defaults: dict[str, Any] = {
        "portfolio_view": "home",
        "portfolio_messages": [],
        "portfolio_pending_query": None,
        "portfolio_worker_queue": None,
        "portfolio_streaming_text": "",
        "portfolio_error": None,
        "portfolio_show_upwork": False,
        "portfolio_static_action": None,
        "portfolio_revision": 0,
        "portfolio_initial_query_handled": False,
        "portfolio_initial_query": None,
        "portfolio_url_query": None,
    }
    for key, value in defaults.items():
        if key not in st.session_state:
            st.session_state[key] = value


def _append_message(role: str, content: str) -> None:
    messages = list(st.session_state.portfolio_messages)
    messages.append({"role": role, "content": content})
    st.session_state.portfolio_messages = messages[-12:]
    st.session_state.portfolio_revision += 1


def _clear_conversation(*, clear_query: bool = True) -> None:
    st.session_state.portfolio_view = "home"
    st.session_state.portfolio_messages = []
    st.session_state.portfolio_pending_query = None
    st.session_state.portfolio_worker_queue = None
    st.session_state.portfolio_streaming_text = ""
    st.session_state.portfolio_error = None
    st.session_state.portfolio_show_upwork = False
    st.session_state.portfolio_static_action = None
    st.session_state.portfolio_initial_query = None
    st.session_state.portfolio_url_query = None
    st.session_state.portfolio_initial_query_handled = False
    st.session_state.portfolio_revision += 1
    if clear_query:
        st.query_params.clear()


def _set_query(query: str) -> None:
    # Only the initial visitor question is shareable; chat history stays server-side
    # in the current browser session and is never persisted.
    st.query_params["query"] = query


def _start_stream_worker(history: list[dict[str, str]]) -> None:
    events: queue.Queue[tuple[str, str | None]] = queue.Queue()
    st.session_state.portfolio_worker_queue = events

    worker = threading.Thread(
        target=_run_stream_worker,
        args=(events, history),
        name="deepseek-portfolio-stream",
        daemon=True,
    )
    worker.start()


def _run_stream_worker(
    events: queue.Queue[tuple[str, str | None]],
    history: list[dict[str, str]],
) -> None:
    try:
        for chunk in DeepSeekGateway().stream_reply(history):
            events.put(("chunk", chunk))
    except DeepSeekGatewayError as exc:
        events.put(("error", str(exc)))
    except Exception:
        events.put(
            (
                "error",
                "AI chat is temporarily unavailable. The static portfolio is still ready to browse.",
            )
        )
    else:
        events.put(("done", None))


def _poll_stream_worker() -> bool:
    events = st.session_state.portfolio_worker_queue
    if not isinstance(events, queue.Queue):
        return False

    changed = False
    terminal: tuple[str, str | None] | None = None
    while True:
        try:
            event = events.get_nowait()
        except queue.Empty:
            break
        kind, value = event
        if kind == "chunk" and isinstance(value, str):
            st.session_state.portfolio_streaming_text += value
            changed = True
        elif kind in {"done", "error"}:
            terminal = event
            changed = True

    if changed:
        st.session_state.portfolio_revision += 1

    if terminal is None:
        return changed

    kind, value = terminal
    query = st.session_state.portfolio_pending_query
    answer = st.session_state.portfolio_streaming_text.strip()
    if kind == "done" and answer:
        _append_message("assistant", answer)
        if isinstance(query, str):
            st.session_state.portfolio_show_upwork = _should_show_upwork(query, answer)
    elif kind == "done":
        st.session_state.portfolio_error = (
            "The AI service returned an empty answer. Please try again or continue on Upwork."
        )
    else:
        st.session_state.portfolio_error = value or (
            "AI chat is temporarily unavailable. The static portfolio is still ready to browse."
        )
        st.session_state.portfolio_show_upwork = False

    st.session_state.portfolio_pending_query = None
    st.session_state.portfolio_worker_queue = None
    st.session_state.portfolio_streaming_text = ""
    return True


def _start_ai_query(query: str) -> None:
    query = query.strip()
    if st.session_state.portfolio_pending_query is not None:
        return
    st.session_state.portfolio_view = "chat"
    st.session_state.portfolio_error = None
    st.session_state.portfolio_show_upwork = False
    st.session_state.portfolio_static_action = None
    if not query:
        st.session_state.portfolio_pending_query = None
        st.session_state.portfolio_worker_queue = None
        st.session_state.portfolio_streaming_text = ""
        return
    if len(query) > MAX_QUERY_LENGTH:
        st.session_state.portfolio_pending_query = None
        st.session_state.portfolio_worker_queue = None
        st.session_state.portfolio_streaming_text = ""
        st.session_state.portfolio_error = "Please keep a question under 2,000 characters."
        return
    _append_message("user", query)
    st.session_state.portfolio_pending_query = query
    st.session_state.portfolio_streaming_text = ""
    _start_stream_worker(list(st.session_state.portfolio_messages))
    if st.session_state.portfolio_initial_query is None:
        st.session_state.portfolio_initial_query = query
        st.session_state.portfolio_initial_query_handled = True
        _set_query(query)


def _handle_static_action(action: str) -> None:
    if action == "home":
        _clear_conversation()
        return
    if action == "submit":
        return
    response = quick_message(action)
    if response is None:
        return
    labels = {
        "me": "Tell me about Noah.",
        "projects": "What projects should I look at?",
        "skills": "What skills does Noah bring?",
        "experience": "What is Noah's engineering background?",
        "contact": "How can I contact Noah?",
        "process": "How does Noah work with a client?",
        "cta": "How can Noah help with my AI project?",
    }
    _append_message("user", labels.get(action, response["title"]))
    _append_message("assistant", response["body"])
    st.session_state.portfolio_view = "chat"
    st.session_state.portfolio_pending_query = None
    st.session_state.portfolio_worker_queue = None
    st.session_state.portfolio_streaming_text = ""
    st.session_state.portfolio_error = None
    st.session_state.portfolio_show_upwork = action in {"contact", "cta", "process"}
    st.session_state.portfolio_static_action = action


def _trigger_value(result: Mapping[str, Any], key: str) -> Any:
    value = result.get(key)
    return value if value not in (None, False, "") else None


def _consume_component_events(result: Mapping[str, Any]) -> bool:
    """Apply one-time browser events and report whether a rerun is needed."""

    reset = _trigger_value(result, "reset")
    if reset:
        _clear_conversation()
        return True

    submit = _trigger_value(result, "submit")
    if isinstance(submit, dict):
        query = submit.get("query")
        if isinstance(query, str):
            _start_ai_query(query)
            return True
    elif isinstance(submit, str):
        _start_ai_query(submit)
        return True

    action = _trigger_value(result, "action")
    if isinstance(action, dict):
        action_type = action.get("type")
        value = action.get("value")
        if action_type == "submit" and isinstance(value, str):
            _start_ai_query(value)
            return True
        if isinstance(action_type, str):
            _handle_static_action(action_type)
            return True

    heartbeat = _trigger_value(result, "heartbeat")
    if heartbeat:
        return _poll_stream_worker()
    return False


def _should_show_upwork(query: str, answer: str) -> bool:
    text = f"{query} {answer}".lower()
    return any(
        marker in text
        for marker in (
            "upwork",
            "scope",
            "contract",
            "rate",
            "availability",
            "start date",
            "hire",
            "project",
        )
    )


def _handle_initial_query() -> None:
    raw_query = st.query_params.get("query")
    normalized_query = raw_query.strip() if isinstance(raw_query, str) and raw_query.strip() else None
    previous_query = st.session_state.portfolio_url_query

    if normalized_query:
        st.session_state.portfolio_url_query = normalized_query
        if not st.session_state.portfolio_initial_query_handled:
            st.session_state.portfolio_initial_query = normalized_query[:MAX_QUERY_LENGTH]
            st.session_state.portfolio_initial_query_handled = True
            _start_ai_query(st.session_state.portfolio_initial_query)
        return

    if previous_query and st.session_state.portfolio_view == "chat":
        _clear_conversation(clear_query=False)


def _build_component_data() -> dict[str, Any]:
    return {
        "view": st.session_state.portfolio_view,
        "messages": list(st.session_state.portfolio_messages),
        "pending": bool(st.session_state.portfolio_pending_query),
        "streamingText": st.session_state.portfolio_streaming_text,
        "error": st.session_state.portfolio_error,
        "showUpwork": bool(st.session_state.portfolio_show_upwork),
        "staticAction": st.session_state.portfolio_static_action,
        "profile": PUBLIC_PROFILE,
        "messageRevision": st.session_state.portfolio_revision,
    }


def main() -> None:
    _ensure_state()
    _handle_initial_query()

    result = render_portfolio(
        data=_build_component_data(),
        key=COMPONENT_KEY,
    )

    if _consume_component_events(result):
        st.rerun()


main()
