/* eslint-disable linebreak-style */
import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Home from "./Home";
import StudentTracking from "./StudentTracking";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <HashRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/studenttracking/" component={StudentTracking} />
          </div>
        </HashRouter>
      </div>
    );
  }
}
