import React from "react";
import ReactDOM from "react-dom/client";
// import {  createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./providers/LanguageProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
