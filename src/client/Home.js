// eslint-disable-next-line linebreak-style
import React, { Component } from "react";
import Menu from "./Menu";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Menu />
        <div className="Sorry">
          Frankly the program I was writing got too big for me to maintain at my
          current experience. I had to restart it two times already since
          Thanksgiving and this is what I have working. I would have loved to
          show all the data in the tables sorted or the ability to delete
          students, but once I added some of that the app became unstable.
        </div>
      </div>
    );
  }
}
