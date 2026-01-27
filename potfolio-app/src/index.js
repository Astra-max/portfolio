import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "../src/components/App";
import reportWebVitals from "./reportWebVitals";

// eslint-disable-next-line react-hooks/rules-of-hooks
//const { val, setVal } = useNotification(initialSate)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
