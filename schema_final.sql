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
CREATE TABLE departments (
department_id INTEGER(10) AUTO_INCREMENT NOT NULL,
department_name VARCHAR(50) NOT NULL,
over_head_costs INTEGER(10) DEFAULT 0,
PRIMARY KEY (department_id)
)


 