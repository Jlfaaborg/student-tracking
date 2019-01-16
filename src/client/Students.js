/* eslint-disable linebreak-style */
import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Students extends Component {
  tableMaker(student) {
    const tableMaker = (this.student = "")
      ? emptyTable
      : student.map(student => (
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
      <Table stripped size="sm">
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
      </Table>
    );
  }

  render() {
    let students = this.props.students;
    return this.tableMaker(students);
  }
}
