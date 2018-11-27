import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import StudentTrackingForm from "./StudentTrackingForm";
import Students from "./Students";

export default class StudentTracking extends Component {
  render() {
    return (
      <div className="StudentTracking">
        <Header />
        <Menu />
        <StudentTrackingForm />
      </div>
    );
  }
}
