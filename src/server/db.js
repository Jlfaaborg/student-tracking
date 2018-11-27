var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b4a2d595e8780a",
  password: "426f165c",
  database: "heroku_038c1163e21ec19"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
