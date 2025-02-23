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
