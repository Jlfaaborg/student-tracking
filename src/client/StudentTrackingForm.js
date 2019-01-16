/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React, { Component } from "react";
import Students from "./Students";
import { Form, Label, Input, Button } from "reactstrap";

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
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleGetStudents = this.handleGetStudents.bind(this);
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
      })
        .then(res => console.log(res))
        .catch(e => {
          console.log(e);
          this.render();
        });
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
      <div id="form">
        <Form>
          <h3>Student Tracking Form</h3>
          <Input
            type="number"
            name="id"
            placeHolder="ID"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="firstName"
            placeHolder="Last Name"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeHolder="Hours"
            onChange={this.handleChange}
          />
          <Input
            type="number"
            placeHolder="Hours"
            name="hours"
            onChange={this.handleChange}
          />
          <Input
            type="select"
            name="location"
            value={this.location}
            onChange={this.handleChange}
          >
            <option value="clearwater">Clearwater</option>
            <option value="seminole">Seminole</option>
            <option value="stPete">St. Pete/Gibbs</option>
            <option value="tarpon">Tarpon Springs</option>
          </Input>
          <Button color="primary" onClick={this.handleAddStudent.bind(this)}>
            Add
          </Button>
          <Button color="secondary" onClick={this.handleGetStudents.bind(this)}>
            Get
          </Button>
        </Form>
        <Students students={this.state.data} />
      </div>
    );
  }
}
