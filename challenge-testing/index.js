class ShoppingCart{
    constructor(){
        this.items = [];
    }
    addProduct(product){
        this.items.push(product);
    }
    calculateTotal(){
        return this.items.reduce((total, product) => total + product.price * product.quantity, 0);
    }
    applyDiscount(discount){
        const total = this.calculateTotal();
        const discountAmount = total * discount;
        return total - discountAmount;
    }
}

module.exports = ShoppingCart;