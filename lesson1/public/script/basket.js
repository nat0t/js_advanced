class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Basket {
    constructor(clientId) {
        this.clientId = clientId;
        this.content = [];
        this.total = 0;
    }
    add(product) {
        this.content.push(product);
    }
    remove(product) {
        for (let i = this.content.length - 1; i >= 0; i--) {
            if (this.content[i].id == product.id) {
                this.content.splice(i, 1);
            }
        }
    }
    calcTotal() {
        this.total = 0;
        for (let product of this.content) {
            this.total += +product.price;
        }
    }
    show() {
        this.calcTotal();
        console.log(`Product name\t\tPrice`)
        for (let product of this.content) {
            console.log(`${product.name}\t\t${product.price}`)
        };
        console.log(`Total:\t\t\t${this.total}`);
    }
}