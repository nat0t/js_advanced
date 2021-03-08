class Cart extends AbstractList {
    total = 0

    add(good) {
        const goodItem = new CartItem({ name: good._name, price: good._price, img: good._img, count: good._count }, CartInstance)
        if (!(this._items.some(item => item._name == goodItem._name))) {
            this._items.push(goodItem)
        } else {
            const item = this._items.find(item => item._name == goodItem._name)
            item._plus()
        }
        this._calcTotal()
    }

    _calcTotal() {
        this.total = 0;
        for (let item of this._items) {
            this.total += +item._price * item._count;
        }
        this._renderTotal()
    }

    _renderTotal() {
        if (document.querySelector('.cart-total') !== null) {
            document.querySelector('.cart-total').remove()
        }
        if (document.querySelector('.cart-item') !== null) {
            const cartTotal = `<div class="cart-total"><div>ИТОГО</div><div>${this.total}</div></div>`
            document.querySelector('.cart-list').lastChild.insertAdjacentHTML('afterEnd', cartTotal)
        }
    }
}