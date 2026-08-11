"""Public mounting API for the Noah Backend & AI Portfolio component."""

from __future__ import annotations

from collections.abc import Callable, Mapping
from typing import Any

import streamlit as st


_portfolio_component: Any | None = None


def _get_portfolio_component() -> Any:
    global _portfolio_component
    if _portfolio_component is None:
        _portfolio_component = st.components.v2.component(
            "noah-ai-portfolio.portfolio",
            html='<div id="portfolio-root"></div>',
            css="style-*.css",
            js="index-*.js",
        )
    return _portfolio_component


def render_portfolio(
    *,
    data: Mapping[str, Any],
    key: str,
    on_submit_change: Callable[[], None] | None = None,
    on_action_change: Callable[[], None] | None = None,
    on_reset_change: Callable[[], None] | None = None,
    on_heartbeat_change: Callable[[], None] | None = None,
) -> Any:
    """Mount the portfolio and expose its public interaction triggers."""

    noop = lambda: None
    return _get_portfolio_component()(
        data=dict(data),
        key=key,
        width="stretch",
        height="content",
        on_submit_change=on_submit_change or noop,
        on_action_change=on_action_change or noop,
        on_reset_change=on_reset_change or noop,
        on_heartbeat_change=on_heartbeat_change or noop,
    )
