import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";

ReactDOM.render(
  <HashRouter
  // getUserConfirmation={optionalFunc}
  // hashType={optionalString}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();