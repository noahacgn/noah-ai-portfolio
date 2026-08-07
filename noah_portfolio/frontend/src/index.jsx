import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";

const roots = new WeakMap();

export default function renderPortfolio(component) {
  const { data, parentElement, setTriggerValue } = component;
  const mountPoint = parentElement.querySelector("#portfolio-root");
  const assetBase = new URL(/* @vite-ignore */ "./assets/", import.meta.url).href;
  let root = roots.get(mountPoint);
  if (!root) {
    root = createRoot(mountPoint);
    roots.set(mountPoint, root);
  }

  root.render(
    <React.StrictMode>
      <App
        data={data}
        setTriggerValue={setTriggerValue}
        assetBase={assetBase}
      />
    </React.StrictMode>,
  );

  return () => {
    root.unmount();
    roots.delete(mountPoint);
  };
}
