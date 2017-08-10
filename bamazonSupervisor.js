var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var superHidden = require("./key.js");
// instantiate
var table = new Table({
head: ['Department ID', 'Department Name', 'Dep. Total Sales', 'Dep. Over Head', 'Total Profit']
, colWidths: [20, 20, 20, 20, 20]
});
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: superHidden,
  database: "bamazon"
});
function viewDepartmentSales() {
  connection.query("SELECT departments.department_id, departments.department_name, departments.over_head_costs, SUM(product_sales), (SUM(product_sales) - over_head_costs) AS total_profit FROM departments INNER JOIN products ON (departments.department_name = products.department_name) GROUP BY department_id", function(err, res) {
    if (err) throw err;
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
      let departId = res[i].department_id.toString();
      let departName = res[i].department_name.toString();
      let departSalesSum = res[i]['SUM(product_sales)'];
      let departOverHead = res[i].over_head_costs.toString();
      let departProfits = res[i].total_profit.toString();
      table.push(
          [departId, departName, departSalesSum, departOverHead, departProfits]
      );
    }
        console.log(table.toString());
        setTimeout(()=>{supervisorChoices();});
});

};
function youDone() {
inquirer.prompt([
  {
    type: "confirmm",
    name: "moveOn",
    message: "Are you done looking at the information? (y/n)"
  }]).then(function(ansObj) {
      if (ansObj.moveOn === 'y') {
        supervisorChoices();
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
          supervisorChoices();
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
