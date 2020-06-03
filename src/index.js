import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import WebFontConfig from "webfontloader";

WebFontConfig.load({
  google: {
    families: ["Open Sans", "Poppins", "Poppins:700"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
