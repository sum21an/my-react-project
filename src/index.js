import React, { Component } from "react";
import { render } from "react-dom";
import MyRouter from "./layout/MyRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <MyRouter />;
  }
}

render(<App />, document.getElementById("root"));
