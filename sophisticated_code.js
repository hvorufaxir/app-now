/**
 * sophisticated_code.js
 * 
 * This JavaScript code implements a complex and elaborate system that manages a fictional online store's inventory.
 * It includes features like product listing, searching, adding new products, updating quantities, and calculating total sales.
 *
 * Features:
 * - Create an inventory database as an array of products
 * - Each product contains properties like name, price, quantity, and sales
 * - Implement functions to list all products, search for a product by name, add a new product, update quantity, and calculate sales
 * - Include error handling to prevent duplicate product names and invalid quantities and prices
 * - Use user input prompts to interact with the system
 * - Ensure user inputs are validated appropriately
 *
 * Note: This is a simplified example. A real-world inventory management system would be more complex with a database backend.
 */

// Define the product class
class Product {
  constructor(name, price, quantity, sales) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.sales = sales;
  }
}

// Initialize the inventory database
const inventory = [];

// Function to list all products in the inventory
function listProducts() {
  for (const product of inventory) {
    console.log(`${product.name}: $${product.price} (${product.quantity} available, ${product.sales} sold)`);
  }
}

// Function to search for a product by name
function searchProduct(productName) {
  for (const product of inventory) {
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      return product;
    }
  }
  return null;
}

// Function to add a new product
function addProduct() {
  const name = prompt("Enter the product name:");
  const price = parseFloat(prompt("Enter the product price (in USD):"));
  const quantity = parseInt(prompt("Enter the product quantity:"));

  if (!name || isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
    console.log("Invalid input!");
    return;
  }

  if (searchProduct(name)) {
    console.log("Product already exists!");
    return;
  }

  const product = new Product(name, price, quantity, 0);
  inventory.push(product);
  console.log(`${name} added to inventory.`);
}

// Function to update the quantity of a product
function updateQuantity() {
  const productName = prompt("Enter the product name:");
  const product = searchProduct(productName);

  if (!product) {
    console.log("Product not found!");
    return;
  }

  const quantityDelta = parseInt(prompt("Enter the quantity change:"));
  if (isNaN(quantityDelta)) {
    console.log("Invalid quantity!");
    return;
  }

  product.quantity += quantityDelta;
  console.log(`Quantity updated. ${product.name} now has ${product.quantity} available.`);
}

// Function to calculate total sales
function calculateSales() {
  let totalSales = 0;
  for (const product of inventory) {
    totalSales += product.sales;
  }
  console.log(`Total sales: $${totalSales}`);
}

// Main program loop
while (true) {
  const choice = prompt(`
    Choose an action:
    1. List all products
    2. Search for a product
    3. Add a new product
    4. Update product quantity
    5. Calculate total sales
    0. Exit
  `);

  switch (choice) {
    case "1":
      listProducts();
      break;

    case "2":
      const searchName = prompt("Enter the product name to search:");
      const searchedProduct = searchProduct(searchName);
      if (searchedProduct) {
        console.log(`${searchedProduct.name}: $${searchedProduct.price} (${searchedProduct.quantity} available, ${searchedProduct.sales} sold)`);
      } else {
        console.log("Product not found!");
      }
      break;

    case "3":
      addProduct();
      break;

    case "4":
      updateQuantity();
      break;

    case "5":
      calculateSales();
      break;

    case "0":
      console.log("Exiting...");
      return;

    default:
      console.log("Invalid choice!");
  }
}

// End of code