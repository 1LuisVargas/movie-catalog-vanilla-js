const ShoppingCart = require("../index.js");

// Testing ShoppingCart class
describe("Testing the entire shopping cart class", () => {
    // Test constructor
    test("Testing that the cart is initialized empty", () => {
        const cart = new ShoppingCart();
        expect(cart.items.length).toBe(0);
    });

    // Test addProduct
    test("Testing that it can add products", () => {
        const cart = new ShoppingCart();
        cart.addProduct({ name: "Product 1", price: 10 , quantity: 1});
        cart.addProduct({ name: "Product 2", price: 10 , quantity: 4});
        cart.addProduct({ name: "Product 3", price: 10 , quantity: 5});
        expect(cart.items.length).toBe(3);
    });

    // Testing if addProduct throws an error
    test("Testing that it throws an error if the product is invalid", () => {
        const cart = new ShoppingCart();
        expect(() => cart.addProduct()).toThrow("Invalid product");
        expect(() => cart.addProduct({ name: "Product 1", price: 10 })).toThrow("Invalid product");
        expect(() => cart.addProduct({ name: "Product 1", price: 10 , quantity: -1})).toThrow("Invalid product");
        expect(() => cart.addProduct({ name: "Product 1", price: "10" , quantity: 1})).toThrow("Invalid product");
        expect(() => cart.addProduct({ name: "Product 1", price: 10 , quantity: 1})).not.toThrow("Invalid product");
    });

    // Test calculateTotal
    test("Testing that it can successfully calculate the total", () => {
        const cart = new ShoppingCart();
        cart.addProduct({ name: "Product 1", price: 10, quantity: 2 });
        cart.addProduct({ name: "Product 2", price: 20, quantity: 1 });
        expect(cart.calculateTotal()).toBe(40);
    });

    // Test applyDiscount
    test("Testing that it can successfully apply a discount", () => {
        const cart = new ShoppingCart();
        cart.addProduct({ name: "Product 1", price: 10, quantity: 2 });
        cart.addProduct({ name: "Product 2", price: 20, quantity: 1 });
        cart.applyDiscount(0.5);
        expect(cart.calculateTotal()).toBe(20);
    });

    // Testing if applyDiscount throws an error
    test("Testing that it throws an error if the discount is invalid", () => {
        const cart = new ShoppingCart();
        expect(() => cart.applyDiscount()).toThrow("The discount must be between 0 and 1");
        expect(() => cart.applyDiscount(-1)).toThrow("The discount must be between 0 and 1");
        expect(() => cart.applyDiscount(2)).toThrow("The discount must be between 0 and 1");
        expect(() => cart.applyDiscount(0.5)).not.toThrow("The discount must be between 0 and 1");
    });
});