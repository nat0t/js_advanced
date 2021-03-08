import AbstractList from './abstractList.js'
import GoodItem from './goodItem.js'
import CartInstance from './index.js'

export default class List extends AbstractList {

    constructor(CartInstance) {
        super()
        this.fetchGoods()
    }

    fetchGoods() {
        fetch('http://localhost:3000/database/items.json')
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