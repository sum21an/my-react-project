import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import store from "./redux/store";
import MyRouter from "./layout/MyRouter";

const history = createBrowserHistory();

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MyRouter />
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
