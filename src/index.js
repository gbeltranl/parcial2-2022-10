import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { LocalProvider } from "./contexts/LocalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocalProvider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </LocalProvider>
);
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
