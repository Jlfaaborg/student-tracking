/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React, { Component } from "react";
import Students from "./Students";

export default class StudentTrackingForm extends Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddStudent(e) {
    if (this.verifyInput()) {
      fetch("http://localhost:8080/studenttracking", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: this.state.id,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          hours: this.state.hours
        })
      }).then(res => console.log(res));
    }
  }

  handleGetStudents(e) {
    fetch("http://localhost:8080/studenttracking/students", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(values => {
        console.log(values);
        this.setState({
          data: values
        });
      });
  }

  verifyInput() {
    if (this.state.id.toString().length > 7) {
      alert("ID NEEDS TO BE 7 OR LESS DIGITS");
      return false;
    }
    return true;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddStudent.bind(this)}>
          ID
          <input type="number" name="id" onChange={this.handleChange} />
          <br />
          First Name
          <input type="text" name="firstName" onChange={this.handleChange} />
          <br />
          Last Name
          <input type="text" name="lastName" onChange={this.handleChange} />
          <br />
          Hours
          <input type="number" name="hours" onChange={this.handleChange} />
          <br />
          <input type="submit" value="Submit" />
          <button type="button" onClick={this.handleGetStudents.bind(this)}>
            Get
          </button>
        </form>
        <Students students={this.state.data} />;
      </div>
    );
  }
}
