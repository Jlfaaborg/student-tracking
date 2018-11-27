var express = require("express");
var router = express.Router();
var connection = require("../db");
var path = require("path");

router.get("/", function(req, res) {
  res.render("index", { title: "Student Tracking" });
});

router.get("/students", function(req, res) {
  var sql = "SELECT * FROM users";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

router.post("/", function(req, res) {
  console.log(req.body);
  let student = req.body;
  var values = [
    student.id,
    student.firstName,
    student.lastName,
    student.hours,
    student.hours
  ];
  var sql =
    "INSERT INTO users (id, firstName, lastName, hours) VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE hours = hours + (?)";
  connection.query(sql, values, function(err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  res.send("GOOD");
});

module.exports = router;
