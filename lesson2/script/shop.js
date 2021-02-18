class List {
  _items = []

  constructor(CartInstance) {
    let goods = this.fetchGoods()
    goods = goods.map(item => {
      return new GoodItem(item, CartInstance)
    })
    this._items = goods
    this.render()
  }

  fetchGoods() {
    return [
      { name: 'Shirt', price: 150, img: 'img/gb.png' },
      { name: 'Socks', price: 250, img: 'img/gb.png' },
      { name: 'Jacket', price: 750, img: 'img/gb.png' },
    ]
  }

  render() {
    this._items.forEach(good => {
      good.render()
    })
  }
}

class GoodItem {
  _name = ''
  _price = 0
  _img = 0
  _CartInstance = null

  constructor({ name, price, img }, CartInstance) {
    this._name = name
    this._price = price
    this._img = img
    this._CartInstance = CartInstance
  }

  addToCart() {
    this._CartInstance.add(this)
    console.log('Added!', this._name)
  }

  render() {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.innerHTML = `
        Товар: ${this._name} = ${this._price}
        <img src="${this._img}" />
      `
      const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
      btn.render(block)

      placeToRender.appendChild(block)
    }
  }
}

class Cart {
  _items = []

  add(good) {
    this._items.push(good)
  }
}

// class CartItem {

// }

const CartInstance = new Cart()

new List(CartInstance)