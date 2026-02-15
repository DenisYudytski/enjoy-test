import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "antd/dist/reset.css";
import { Providers } from "./app/providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root"),
);
