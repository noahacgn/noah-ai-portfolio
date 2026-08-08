"""Deterministic local DeepSeek HTTP double for browser-level tests."""

from __future__ import annotations

import json
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any


class FakeDeepSeekHandler(BaseHTTPRequestHandler):
    server_version = "NoahPortfolioFakeDeepSeek/1.0"

    def log_message(self, format: str, *args: Any) -> None:  # noqa: A002
        # Test output must never contain request bodies or generated content.
        return

    def do_GET(self) -> None:  # noqa: N802
        if self.path == "/health":
            self.send_response(200)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"ok")
            return
        self.send_error(404)

    def do_POST(self) -> None:  # noqa: N802
        if self.path != "/chat/completions":
            self.send_error(404)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            payload = json.loads(self.rfile.read(length))
            query = _last_user_query(payload)
        except (ValueError, json.JSONDecodeError):
            self.send_error(400)
            return

        lowered = query.lower()
        if "balance" in lowered:
            self.send_response(402)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"error":{"message":"test balance"}}')
            return
        if "provider-error" in lowered:
            self.send_response(503)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"error":{"message":"test provider"}}')
            return

        if "slow" in lowered:
            time.sleep(1.2)
        if "absolute-timeout" in lowered:
            self._start_stream()
            for _ in range(12):
                try:
                    self._write_event(
                        json.dumps({"choices": [{"delta": {"content": "."}}]})
                    )
                except (BrokenPipeError, ConnectionAbortedError, ConnectionResetError):
                    return
                time.sleep(0.4)
            return
        if "invalid" in lowered:
            self._start_stream()
            self._write_event("not-json")
            self._write_event("[DONE]")
            return
        if "empty" in lowered:
            self._start_stream()
            self._write_event("[DONE]")
            return

        if any(token in query for token in ("中文", "中国語", "你好")):
            answer = "我是 Noah 的 AI Portfolio。我的重点是 LangGraph、RAG 与全栈交付；正式范围和条款请在 Upwork 与 Noah 确认。"
        elif "bold-formatting" in lowered:
            answer = "Noah builds **Custom AI Agents & Workflows** and **RAG platforms**."
        elif "injection" in lowered or "ignore" in lowered:
            answer = "I’m the AI Portfolio, so I’ll stay within Noah’s public profile. I can explain his projects, skills, experience, or process."
        else:
            answer = "I’m the AI Portfolio, not Noah himself. Noah builds practical LangGraph and retrieval products with the backend, UI, testing, and delivery around them. Continue on Upwork with your use case and workflow."

        self._start_stream()
        chunks = [answer[:44], answer[44:92], answer[92:]]
        for chunk in chunks:
            if chunk:
                self._write_event(
                    json.dumps(
                        {"choices": [{"delta": {"content": chunk}}]},
                        ensure_ascii=False,
                    )
                )
                self.wfile.flush()
                time.sleep(0.06)
        if "delayed-done" in lowered:
            time.sleep(0.8)
        self._write_event("[DONE]")

    def _start_stream(self) -> None:
        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream; charset=utf-8")
        self.send_header("Cache-Control", "no-cache")
        self.send_header("Connection", "close")
        self.end_headers()

    def _write_event(self, data: str) -> None:
        self.wfile.write(f"data: {data}\n\n".encode("utf-8"))
        self.wfile.flush()


def _last_user_query(payload: object) -> str:
    if not isinstance(payload, dict):
        return ""
    messages = payload.get("messages")
    if not isinstance(messages, list):
        return ""
    for message in reversed(messages):
        if isinstance(message, dict) and message.get("role") == "user":
            content = message.get("content")
            if isinstance(content, str):
                return content
    return ""


def main() -> None:
    server = ThreadingHTTPServer(("127.0.0.1", 8765), FakeDeepSeekHandler)
    try:
        server.serve_forever()
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
