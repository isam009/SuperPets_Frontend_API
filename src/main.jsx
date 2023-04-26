import React from "react";
import ReactDOM from "react-dom/client";
import { SuperPetsApp } from "./SuperPetsApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SuperPetsApp />
    </BrowserRouter>
  </React.StrictMode>
);
