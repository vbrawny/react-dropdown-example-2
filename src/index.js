import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Abc from "./abc";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Abc />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
