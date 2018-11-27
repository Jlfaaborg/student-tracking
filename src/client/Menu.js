/* eslint-disable linebreak-style */
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div className="Nav">
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/studenttracking">Student Tracking</Link>
        </nav>
      </div>
    );
  }
}
