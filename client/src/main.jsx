import React from "react";
import { StrictMode } from "react";
import RouterDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

RouterDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
