var express = require("express");
var router = express.Router();
var async = require("async");
var connection = require("../db");
var path = require("path");

router.get("/", function(req, res) {
  res.render("index", { title: "Student Tracking" });
});

router.get("/students", function(req, res) {
  var sql =
    "SELECT *, location.clearwater, location.stPete, location.seminole, location.tarpon FROM users INNER JOIN location ON users.id = location.id";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
  connection.close();
});

router.post("/", function(req, res) {
  var student = req.body;
  var valuesA = [
    student.id,
    student.firstName,
    student.lastName,
    student.hours,
    student.hours
  ];
  var sqlA =
    "INSERT INTO users (id, firstName, lastName, hours) VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE hours = hours + (?);";
  valuesB = [student.id, student.hours, student.hours];
  switch (student.location) {
    case "clearwater":
      var sqlB =
        "INSERT INTO location (id, clearwater) VALUES (?, ?) ON DUPLICATE KEY UPDATE clearwater = clearwater + (?);";
      break;
    case "stPete":
      var sqlB =
        "INSERT INTO location (id, stPete) VALUES (?, ?) ON DUPLICATE KEY UPDATE stPete = stPete + (?);";
      break;
    case "tarpon":
      var sqlB =
        "INSERT INTO location (id, tarpon) VALUES (?, ?) ON DUPLICATE KEY UPDATE tarpon = tarpon + (?);";
      break;
    case "seminole":
      var sqlB =
        "INSERT INTO location (id, seminole) VALUES (?, ?) ON DUPLICATE KEY UPDATE seminole = seminole + (?);";
      break;
  }

  console.log(valuesA);
  console.log(valuesB);
  console.log(sqlA);
  console.log(sqlB);

  async.parallel([
    parallel_done => {
      connection.query(sqlA, valuesA, function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        connection.close();
      });
    },
    parallel_done => {
      connection.query(sqlB, valuesB, function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        connection.close();
      });
    }
  ]);
  connection.close();
  res.send("GOOD");
});

module.exports = router;
