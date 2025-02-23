//TASK 1
class Product {
    construction( name, id, price, stock) {
        this.name = name; // sets prodyct name
        this.id = id; // sets product ID
        this.price = price; // sets product price
        this.stock = stock; // sets the quanitity in stock
    }

    getDetails() { // returns product details
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) { // updates stock when order is placed
        this.stock -= quantity;
    }
}

// Test cases 
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

//TASK 2
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; // sets order ID
        this.product = product; // sets product ordered
        this.quantity = quantity; // sets quantity
        this.totalPrice = product.price * quantity; // calculates order price total
        product.updateStock(quantity); // reduces stock when an order is created
    }

    getOrderDetails() { // returns order details
        return `Order Id: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}

// Test cases 
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

//TASK 3
class Inventory {
    constructor() {
        this.product = []; // array set to store products
    }

    addProduct(product) { // adds new product to inventory
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails());
        });
    }
}

//Test Cases
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"