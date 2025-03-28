const ShoppingCart = require("../index.js");

// La clase debe tener los siguientes métodos:
// constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

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
});