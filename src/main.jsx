import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="main_container">
      <App />
    </div>
  </StrictMode>
);
