import React from "react";
/* import ReactDOM from "react/dom"; */
import ReactDOM from "react-dom/client";
import App from "./App/index";
import "./index.css";

/* ReactDOM.render(<App />, document.getElementById("root")); */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
