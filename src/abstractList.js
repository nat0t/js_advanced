export default class AbstractList {
    _items = []

    render() {
        this._items.forEach(item => {
            item.render()
        })
    }
}