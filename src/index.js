import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./css/App.css";
import { HashRouter as Router } from "react-router-dom";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'G-6VH9WS845R'
}

TagManager.initialize(tagManagerArgs)
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
