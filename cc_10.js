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

//TASK 3, 4, 5
class Inventory {
    constructor() {
        this.products = []; // array set to store products
    }

    addProduct(product) { // adds new product to inventory
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails());
        });
    }

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const newOrder = new Order(orderId, product, quantity);
            this.orders.push(newOrder);
            console.log(`Order ${orderId} succesfully placed.`);
        } else {
            console.log(`Not enough available stock for ${product.name}.`);
        
    }
}

listOrders() {
    this.orders.forEach(order => {
        console.log(order.getOrderDetails());
    });
    }
restockProduct(productId, quantity) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
        product.stock += quantity;
        console.log(`${product.name} is restocked. The new stock: ${product.stock}`);
    } else {
        console.log("No product found.");
    }
}
}

// Test Cases TASK 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Test Cases TASK 4
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// Test Cases for TASK 5
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"