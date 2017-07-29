CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50),
price INTEGER(10) NOT NULL,
stock_quantity INTEGER(10),
product_sales INTEGER(10),
PRIMARY KEY (item_id)
)
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

