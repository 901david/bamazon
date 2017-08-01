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
function whatDoWeHave () {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " Product: " + res[i].product_name + " Cost: $" + res[i].price + " Stock: " + res[i].stock_quantity);
    }
});
};
function managerChoices () {
  inquirer.prompt([
    {
      type: "list",
      name: "manageChoice",
      message: "What would you like to do?",
      choices: ["View Products for Sale","View Low Inventory", "Add to Inventory","Add New Product"]
    }]).then(function(choiceObj) {
      switch (choiceObj.manageChoice) {
        case "View Products for Sale":
              whatDoWeHave();
            break;
          case "View Low Inventory":
          // function
          console.log("View Low Inventory");
          break;
          case "Add to Inventory":
          // function
          console.log("Add to Inventory");
          break;
          case "Add New Product":
          // function
          console.log("Add New Product");
          break;
      };

    });
};
  connection.connect(function(err) {
    if (err) throw err;
    managerChoices();
  });
