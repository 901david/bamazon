var mysql = require("mysql");
var inquirer = require("inquirer");
var userPurchaseItem;
var userPurchaseNumber;
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "4984",
  database: "bamazon"
});
// Determines if we have enough to purchase and purchases it if so
function canYouBuyThis (itemNumArg, itemIDArg) {
  connection.query("SELECT * FROM products WHERE item_id=? ",[itemIDArg], function(err, res) {
    if (err) throw err;
    if (itemNumArg <= res[0].stock_quantity) {
      let totalBillAmount = itemNumArg * res[0].price;
      let newStock = res[0].stock_quantity - itemNumArg;
      console.log("Your purchase has gone through.  The total bill was: $" + totalBillAmount);
      connection.query("UPDATE products SET stock_quantity=?, product_sales=? WHERE item_id=?",[newStock, totalBillAmount, itemIDArg], function(err, res) {
        if (err) throw err;
        setTimeout(()=>{whatCanWeBuy()}, 1000);
      });
    }
    else {
      console.log("Not enough stock to fulfill your order.  Please try a different product OR purchase less.");
      whatCanWeBuy();
    }
});
};
// Shows the user what items are available
function whatCanWeBuy () {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " Product: " + res[i].product_name + " Cost: $" + res[i].price);
    };
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
              canYouBuyThis(userPurchaseNumber, userPurchaseItem);
            });

      });
  });
};

connection.connect(function(err) {
  if (err) throw err;
  whatCanWeBuy();
});
