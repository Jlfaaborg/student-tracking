// eslint-disable-next-line linebreak-style
import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import Menu from "./Menu";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Jumbotron fluid>
          <Header />
          <Menu />
        </Jumbotron>
        <div id="hello">
          Hello Welcome to My Small Project. This is something I made for
          school. It simply tracks students hours and on which campus they log
          those hours.
        </div>
      </div>
    );
  }
}
