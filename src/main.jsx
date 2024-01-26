import React from "react";
import ReactDOM from "react-dom/client";
import NavB from "./App.jsx";
import Footer from "./footer/Footer.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavB />
    </BrowserRouter>
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("footer")).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
