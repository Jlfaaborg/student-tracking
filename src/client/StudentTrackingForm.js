/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React, { Component } from "react";
import Students from "./Students";

export default class StudentTrackingForm extends Component {
  constructor() {
    super();
    let student = {
      id: "",
      firstName: "",
      lastName: "",
      hours: "",
      location: "clearwater"
    };

    let data = [];

    this.state = {
      student: student,
      data: data
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
          id: this.state.student.id,
          firstName: this.state.student.firstName,
          lastName: this.state.student.lastName,
          hours: this.state.student.hours,
          location: this.state.student.location
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

  handleGetByLocation() {}

  verifyInput() {
    if (this.state.student.id.toString().length > 7) {
      alert("ID NEEDS TO BE 7 OR LESS DIGITS");
      return false;
    }
    return true;
  }

  handleChange(e) {
    var student = this.state.student;
    var name = [e.target.name].toString();
    var value = e.target.value;
    console.log(name, value);
    student[name] = value;
    console.log(student);
    this.setState({
      student: student
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddStudent.bind(this)}>
          <label htmlFor="id">ID:</label>
          <input type="number" name="id" onChange={this.handleChange} />
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" onChange={this.handleChange} />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" onChange={this.handleChange} />
          <label htmlFor="hours">Hours:</label>
          <input type="number" name="hours" onChange={this.handleChange} />
          <br />
          <label value={this.state.student.location} htmlFor="location">
            Location:
            <select name="location" onChange={this.handleChange}>
              <option value="clearwater">Clearwater</option>
              <option value="seminole">Seminole</option>
              <option value="stPete">St. Pete/Gibbs</option>
              <option value="tarpon">Tarpon Springs</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          <button type="button" onClick={this.handleGetStudents.bind(this)}>
            Get
          </button>
          <button type="button" onClick={this.handleGetByLocation.bind(this)}>
            Get By Location
          </button>
        </form>
        <Students students={this.state.data} />
      </div>
    );
  }
}
