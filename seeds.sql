
INSERT INTO products SET product_name='Charcoal Grill', department_name='Appliances', price=100, stock_quantity=20; 
INSERT INTO products SET product_name='Side By Side Refrigerator', department_name='Appliances', price=800, stock_quantity=45;
INSERT INTO products SET product_name='Lawnmower', department_name='Appliances', price=250, stock_quantity=12;
INSERT INTO products SET product_name='Cell Phone', department_name='Electronics', price=650, stock_quantity=25;
INSERT INTO products SET product_name='Flat Screen', department_name='Electronics', price=1000, stock_quantity=35;
INSERT INTO products SET product_name='Cell Phone', department_name='Electronics', price=650, stock_quantity=25;
INSERT INTO products SET product_name='Bluetooth Speaker', department_name='Electronics', price=50, stock_quantity=65;
INSERT INTO products SET product_name='Xbox', department_name='Electronics', price=350, stock_quantity=15;

INSERT INTO products SET product_name='Pants', department_name='Clothes', price=25, stock_quantity=35;
INSERT INTO products SET product_name='Shirt', department_name='Clothes', price=45, stock_quantity=55;
INSERT INTO products SET product_name='Hat', department_name='Clothes', price=15, stock_quantity=45;
INSERT INTO products SET product_name='Pants', department_name='Clothes', price=25, stock_quantity=35;
INSERT INTO products SET product_name='Shoes', department_name='Clothes', price=45, stock_quantity=65;

USE bamazon;

INSERT INTO departments SET department_name='Clothes', over_head_costs=1200;
INSERT INTO departments SET department_name='Electronics', over_head_costs=1000;
INSERT INTO departments SET department_name='Appliances', over_head_costs=800;
SELECT * FROM departments;

SELECT *
FROM departments
LEFT JOIN products ON departments.department_name = products.department_name;

SELECT    departments.department_id, departments.department_name, departments.over_head_costs, (product_sales - over_head_costs) AS total_profit
FROM      departments
INNER JOIN products ON (departments.department_name = products.department_name);



SELECT    departments.department_id, departments.department_name, departments.over_head_costs, SUM(product_sales), (SUM(product_sales) - over_head_costs) AS total_profit
FROM      departments
INNER JOIN products ON (departments.department_name = products.department_name) GROUP BY department_name;


SELECT department_name, SUM(product_sales) AS total_department_sales FROM products GROUP BY department_name;


