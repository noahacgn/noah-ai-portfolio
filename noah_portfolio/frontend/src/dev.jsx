import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("portfolio-root")).render(
  <React.StrictMode>
    <App
      data={{ view: "home", messages: [], pending: false }}
      assetBase="/assets/"
      setStateValue={() => {}}
      setTriggerValue={() => {}}
    />
  </React.StrictMode>,
);
