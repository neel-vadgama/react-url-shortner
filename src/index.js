import React from "react";
import ReactDOM from "react-dom";
import { ShortenUrlProvider } from "react-shorten-url";
import App from "./App";

ReactDOM.render(
  <ShortenUrlProvider config={{ accessToken: "your_access_token_from_bitly" }}>
    <App />
  </ShortenUrlProvider>,
  document.getElementById("root")
);
