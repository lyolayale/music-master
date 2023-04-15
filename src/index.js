import ReactDOM from "react-dom/client";
import React from "react";

// Internal imports
import App from "./App";
import "./css/normalize.css";
import "./css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
