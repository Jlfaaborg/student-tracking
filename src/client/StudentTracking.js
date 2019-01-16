import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import Header from "./Header";
import Menu from "./Menu";
import StudentTrackingForm from "./StudentTrackingForm";
import Students from "./Students";

export default class StudentTracking extends Component {
  render() {
    return (
      <div id="studentTracking">
        <Jumbotron fluid>
          <Header />
          <Menu />
        </Jumbotron>
        <StudentTrackingForm />
      </div>
    );
  }
}
