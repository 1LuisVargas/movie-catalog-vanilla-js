// Creating the ShoppingCart class
class ShoppingCart{
    constructor(){
        this.items = [];
        this.discountedTotal = null;
    }

    // Adding a product
    addProduct(product){
        if(!product || typeof product.price !== "number" || typeof product.quantity !== "number" || product.price <= 0 || product.quantity <= 0){
            throw new Error("Invalid product");
        }
        this.items.push(product);
    }
    
    // Calculating the total
    calculateTotal(){
        // Checking if the total has already been calculated
        if(this.discountedTotal !== null){
            return this.discountedTotal;
        }

        // Calculating the total
        else {
            return this.items.reduce((total, product) => total + product.price * product.quantity, 0);
        }
    }

    // Applying a discount
    applyDiscount(discount){
        // Checking that the discount applied is valid
        if(discount < 0 || discount > 1 || typeof discount !== "number"){
            throw new Error("The discount must be between 0 and 1");
        }

        // Calculating the discount
        const total = this.calculateTotal();
        this.discountedTotal = total * discount;
    }
}

module.exports = ShoppingCart;