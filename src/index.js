import Cart from './cart.js'
import List from './list.js'

const CartInstance = new Cart()
export default CartInstance

new List(CartInstance)