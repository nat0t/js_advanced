import AbstractItem from './abstractItem.js'
import Button from './button.js'


export default class CartItem extends AbstractItem {
    _count = 0
    _CartInstance = null

    constructor(item, CartInstance, count = 1) {
        super(item)
        this._count = count
        this._CartInstance = CartInstance
        if (!(this._CartInstance._items.some(el => el._name == this._name))) {
            this.render()
        }
    }

    render() {
        const placeToRender = document.querySelector('.cart-list')
        if (placeToRender) {
            if (document.querySelector('.cart-topic') === null) {
                const cartTopic = document.createElement('div')
                cartTopic.className = 'cart-topic'
                cartTopic.innerHTML = `<div class="cart-topic-name">Название товара</div>
                              <div class="cart-topic-price">Цена товара</div>
                              <div class="cart-topic-count">Количество товара</div>`
                placeToRender.appendChild(cartTopic)
            }
            const cartItem = document.createElement('div')
            cartItem.className = 'cart-item'
            cartItem.innerHTML = `<div class="cart-item-name">${this._name}</div>
                              <div class="cart-item-price">${this._price}</div>
                              <div class="cart-item-count">${this._count}</div>`
            placeToRender.appendChild(cartItem)
            const plusBtn = new Button('+', this._plus.bind(this))
            plusBtn.render(cartItem, 'plus-btn')
            const minusBtn = new Button('-', this._minus.bind(this))
            minusBtn.render(cartItem, 'minus-btn')
            const delBtn = new Button('Удалить все', this._delAll.bind(this))
            delBtn.render(cartItem, 'del-btn')
        }
    }

    _plus() {
        this._count += 1
        this._reloadCounter()
    }

    _minus() {
        if (this._count > 0) {
            this._count -= 1
        }
        this._reloadCounter()
    }

    _delAll() {
        this._count = 0
        this._reloadCounter()
        const index = this._CartInstance._items.indexOf(this)
        this._CartInstance._items.splice(index, 1)
        document.querySelector('.cart-list').innerHTML = ''
        this._CartInstance.render()
        this._CartInstance._calcTotal()
    }

    _reloadCounter() {
        this._CartInstance._calcTotal()
        const counts = document.querySelectorAll('.cart-item-count')
        counts.forEach(item => {
            if (item.parentElement.firstChild.innerHTML == this._name) {
                item.innerHTML = this._count
            }
        })
    }
}