# bamazon
This is a storefront Node App that allows you to use three separate interfaces:

### Customer Interface
Customer interface is reached by executing the bamazonCustomer.js file through the Node terminal. When the customer "logs" in they are given a list of all available items for purchase based on the Item Id listed next to it.  The user is prompted for which item they wish to purchase and how much of that item they would like to purchase. At the conclusion of this they are told how much their purchase cost total and then are allowed to purchase additional items.
![Shot1](readmeimages/shot1.png)
![Shot2](readmeimages/shot2.png)

### Manager Interface
Manager interface is reached by executing the bamazonManager.js file through the Node terminal.  When the manager "logs" in they are given a list of commands they can execute:
* View Products for Sale
* View Low Inventory
* Add to Inventory
* Add New Product
![Shot3](readmeimages/shot3.png)
#### View Products for Sale
In this Manager view the user simply gets a list of the products available for sale with one key distinction from the Customer View -- it shows you the quantity available as well.
![Shot4](readmeimages/shot4.png)
#### View Low Inventory
In this Manager view the user is able to see any products that have a quantity less than 5.  This allows a user to determine which products will need to have more stock added to them.
![Shot5](readmeimages/shot5.png)
#### Add to Inventory
In this Manager view the user is able to update the *stock* available for any given item.  The prompt will ask which item you would like to update, and then the quantity. Once this has been completed more stock has been added to this item.
![Shot6](readmeimages/shot6.png)
#### Add New products
In this Manager view the user is able to completely add a new product.  This includes adding the product name, the product department, the product price, and the product stock quantity. Once all appropriate info has been entered the new item is created in the database and is available for purchase by a Customer.
![Shot7](readmeimages/shot7.png)

### Supervisor Interface
In the Supervisor view, users are given a list of commands they can execute:
* View Product Sales by Department
* Create New Department
![Shot8](readmeimages/shot8.png)
#### View Product Sales by Department
In this Supervisor view the user is able to see by department any departments that exist in both the products table and the departments table.  This means that if a Manager sets up a new product that is in a different department that has not yet been created they would need to contact a supervisor to create the department as well. Without this connection the department will not be displayed in this table.  This table combines all products listed in each department and finds a total sum of all sales for each department.  This number is then compared to the over head costs for each department that are entered by the supervisor and outputted is the net profit for each department.  The output is a useful table that will quickly allow you to reference the numbers that are needed.
![Shot9](readmeimages/shot9.png)
#### Create New Department
In this Supervisor view the user is able to create new departments.  These departments can be completely new ones with no products listed, or you could be creating a department for a product that a Manager entered in that fell under a new department previously not created.  The Supervisor is able to set the department name and the over head costs.  Once the appropriate information has been entered, the new department is created in the database.  If products are assigned under this department, this department will appear in the *View Product Sales by Department* and show the potential profits.
![Shot10](readmeimages/shot10.png)

### Demo of App
Please use the below Vimeo link to access a short demonstration of how this app function.
[Bamazon Walk Through](https://vimeo.com/228489772)

Please Note:  If you were to fork this app and use it on your own you would need to enter in teh password and switch out the information for YOUR MySQL Database.
