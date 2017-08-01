var mysql = require("mysql");
var inquirer = require("inquirer");
var userChoice;
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "4984",
  database: "bamazon"
});
function addNewProduct () {
  inquirer.prompt([
    {
      type: "input",
      name: "product_name",
      message: "What is the product you would like to add?"
    },
    {
      type: "input",
      name: "department_name",
      message: "What department would you place this under?"
    },
    {
      type: "input",
      name: "price",
      message: "What is the price?"
    },
    {
      type: "input",
      name: "stock_quantity_entered",
      message: "How many do you have?"
    }]).then(function(manageObj) {

         let name = manageObj.product_name;
         let depart = manageObj.department_name;
         let price = manageObj.price;
         let quant = manageObj.stock_quantity_entered;
      connection.query("INSERT INTO products SET product_name=?, department_name=?,price=?,stock_quantity=?",[name, depart,price,quant], function(err, res) {
        if (err) throw err;
        console.log("Your item has been added.");
        managerChoices();
      });
    });
};
function lowProducts () {
  connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
    if (err) throw err;
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " Product: " + res[i].product_name + " Cost: $" + res[i].price + " Stock: " + res[i].stock_quantity);
    }
    youDone();
});
};
function addInventory () {
whatDoWeHave();
inquirer.prompt([
  {
    type: "input",
    name: "manageChoiceToEdit",
    message: "Which item do you want to add stock to?"
  },
  {
    type: "input",
    name: "manageChoiceToAdd",
    message: "How much do you want to add?"
  }]).then(function(manageObj) {
    let currentStock;
    connection.query("SELECT * FROM products WHERE item_id=?",[manageObj.manageChoiceToEdit], function(err, res) {
      if (err) throw err;
      currentStock = res[0].stock_quantity;
      let newStock = parseInt(manageObj.manageChoiceToAdd) + currentStock;
      connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?",[newStock, manageObj.manageChoiceToEdit], function(err, res) {
        if (err) throw err;
        console.log("Quantity has been updated.");
        managerChoices();
    });
  });
  });
};
function youDone() {
inquirer.prompt([
  {
    type: "confirmm",
    name: "moveOn",
    message: "Are you done Reviewing? (y/n)"
  }]).then(function(ansObj) {
      if (ansObj.moveOn === 'y') {
        managerChoices();
      }
      else if (ansObj.moveOn === 'n') {
          youDone();
      }
      else {
        console.log("Not valid input");
        youDone();
      }
    });

};
function whatDoWeHave () {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " Product: " + res[i].product_name + " Cost: $" + res[i].price + " Stock: " + res[i].stock_quantity);
    }
      if (userChoice === "View Products for Sale") {
        youDone();
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
      userChoice = choiceObj.manageChoice;
      switch (userChoice) {
        case "View Products for Sale":
              whatDoWeHave();
            break;
          case "View Low Inventory":
              lowProducts();
          break;
          case "Add to Inventory":
              addInventory();
          break;
          case "Add New Product":
          addNewProduct();
          break;
      };

    });
};
  connection.connect(function(err) {
    if (err) throw err;
    managerChoices();
  });
