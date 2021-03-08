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