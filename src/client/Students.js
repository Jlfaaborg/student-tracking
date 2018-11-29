/* eslint-disable linebreak-style */
import React, { Component } from "react";

export default class Students extends Component {
  render() {
    let students = this.props.students;
    if (students != "") {
      const tableMaker = students.map(student => (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.firstName}</td>
          <td>{student.lastName}</td>
          <td>{student.clearwater}</td>
          <td>{student.seminole}</td>
          <td>{student.stPete}</td>
          <td>{student.tarpon}</td>
          <td>{student.hours}</td>
        </tr>
      ));
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First</th>
              <th>Last</th>
              <th>Clearater</th>
              <th>Seminole</th>
              <th>St. Pete/Gibbs</th>
              <th>Tarpon Springs</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{tableMaker}</tbody>
        </table>
      );
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First</th>
              <th>Last</th>
              <th>Clearater</th>
              <th>Seminole</th>
              <th>St. Pete/Gibbs</th>
              <th>Tarpon Springs</th>
              <th>Total</th>
            </tr>
          </thead>
        </table>
      );
    }
  }
}
