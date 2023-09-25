import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/navbar.css";
import "./components/logo.css";
import "./components/projectscss.css";
import "./components/cv.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
