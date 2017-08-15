var mysql = require("mysql");
var superHidden = require("./key.js");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: superHidden,
  database: "bamazon"
});
module.exports = connection;
