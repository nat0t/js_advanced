class GoodItem extends AbstractItem {
    _CartInstance = null

    constructor(good, CartInstance) {
        super(good)
        this._CartInstance = CartInstance
    }

    addToCart() {
        this._CartInstance.add(this)
        // console.log('Added!', this._name)
    }

    render() {
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            const goodItem = document.createElement('div')
            goodItem.className = 'good-item'
            const photo = document.createElement('img')
            photo.src = this._img
            const descr = document.createElement('div')
            descr.className = 'good-descr'
            const h3 = document.createElement('h3')
            h3.innerHTML = this._name
            const p = document.createElement('p')
            p.innerHTML = `${this._price} руб.`
            const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
            descr.appendChild(h3)
            descr.appendChild(p)
            btn.render(descr, 'buy-btn')
            goodItem.appendChild(photo)
            goodItem.appendChild(descr)
            placeToRender.appendChild(goodItem)
        }
    }
}