class AbstractList {
  _items = []

  render() {
    this._items.forEach(item => {
      item.render()
    })
  }
}

class AbstractItem {
  _name = ''
  _price = 0
  _img = 0

  constructor({ name, price, img }) {
    this._name = name
    this._price = price
    this._img = img
  }
}

class List extends AbstractList {

  constructor(CartInstance) {
    super()
    this.fetchGoods()
  }

  fetchGoods() {
    const urlLocal = 'http://localhost:3000/database/items.json'
    const urlHeroku = 'https://gb-baraholka.herokuapp.com/database/items.json'
    fetch(urlHeroku)
      .then(res => {
        return res.json()
      })
      .then(res => {
        let goods = res.data.map(item => {
          return new GoodItem(item, CartInstance)
        })
        this._items = goods
        this.render()
      })
  }
}

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

class CartItem extends AbstractItem {
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

const CartInstance = new Cart()

new List(CartInstance)