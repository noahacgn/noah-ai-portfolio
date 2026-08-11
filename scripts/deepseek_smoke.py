"""Explicit, non-default DeepSeek smoke check for local acceptance."""

from __future__ import annotations

import time

from noah_portfolio.deepseek import MODEL, DeepSeekGateway, DeepSeekGatewayError


def main() -> int:
    gateway = DeepSeekGateway()
    if not gateway.configured:
        print("DeepSeek smoke blocked: DEEPSEEK_API_KEY is not configured.")
        return 2

    history = [
        {
            "role": "user",
            "content": "In one short sentence, what kind of backend and AI integration work does Noah Wang do?",
        }
    ]
    started = time.perf_counter()
    chunks = 0
    characters = 0
    try:
        for chunk in gateway.stream_reply(history):
            chunks += 1
            characters += len(chunk)
    except DeepSeekGatewayError as exc:
        print(f"DeepSeek smoke failed: {exc}")
        return 1

    elapsed_ms = round((time.perf_counter() - started) * 1000)
    print(f"DeepSeek smoke passed: model={MODEL}, chunks={chunks}, characters={characters}, elapsed_ms={elapsed_ms}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
