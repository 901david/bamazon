var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
// instantiate
var table = new Table({
head: ['Department ID', 'Department Name', 'Department Total Sales', 'Dep. Over Head', 'Total Profit']
, colWidths: [25, 25, 25, 25, 25,]
});
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "4984",
  database: "bamazon"
});
function viewDepartmentSales() {
  connection.query("SELECT    departments.department_id, departments.department_name, departments.over_head_costs, SUM(product_sales), (SUM(product_sales) - over_head_costs) AS total_profit FROM departments INNER JOIN products ON (departments.department_name = products.department_name) GROUP BY department_name;", function(err, res) {
    if (err) throw err;
    console.log(res);

table.push(
    ['First value', 'Second value','Second value','Second value','Second value']
  , ['First value', 'Second value','Second value','Second value','Second value']
);

console.log(table.toString());
});
};
function createDepartment() {
  inquirer.prompt([
    {
      type: "input",
      name: "departAdd",
      message: "What is the new department name?"
    },
    {
      type: "input",
      name: "overCost",
      message: "What is the over head costs?"
    }]).then(function(todoObj) {
        let departName = todoObj.departAdd;
        let departCosts = todoObj.overCost;
        connection.query("INSERT INTO departments SET department_name=?, over_head_costs=?",[departName, departCosts], function(err, res) {
          if (err) throw err;
          console.log("Your department has been added");
      });
    });
};
function supervisorChoices() {
  inquirer.prompt([
    {
      type: "list",
      name: "superviseChoice",
      message: "What would you like to do?",
      choices: ["View Product Sales by Department", "Create New Department"]
    }]).then(function(choiceObj) {
      switch (choiceObj.superviseChoice) {
        case "View Product Sales by Department":
              viewDepartmentSales();
            break;
          case "Create New Department":
              createDepartment();
          break;
          default:
          console.log("I hope this never happens, it really shouldn't");
      };

    });
};
connection.connect(function(err) {
  if (err) throw err;
  supervisorChoices();
});
