var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "4984",
  database: "bamazon"
});
// Shows the user what items are available
function whatCanWeBuy () {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " Product: " + res[i].product_name + "Cost: $" + res[i].price);
    }
    inquirer.prompt([
      {
        type: "input",
        name: "purchaseItem",
        message: "What is the ID of the item you wish to purchase?"
      }]).then(function(purchaseObj) {
          userPurchaseItem=purchaseObj.purchaseItem;
          inquirer.prompt([
            {
              type: "input",
              name: "number",
              message: "How many do you wish to purchase?"
            }]).then(function(numberObj) {
              userPurchaseNumber=numberObj.number;
              // Call a function here that checks if there are that many if so "sells" it and then updates teh database
              console.log(userPurchaseItem + " " + userPurchaseNumber);
            });

      });
  });
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  whatCanWeBuy();
});
