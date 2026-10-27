import './Cart.css'
import CartList from './CartList.jsx'
import OrderSummary from './OrderSummary.jsx'
import PromoCode from './PromoCode.jsx'
import Button from '../Button/Button.jsx'
import data from '../../data/products.json'

const DELIVERY_PRICE = 16

function Cart({ cart, onChangeQuantity, onRemoveFromCart, onNavigate }) {
  // соединяем { id, quantity } из корзины с данными товара из каталога
  const cartItems = cart.map((item) => ({
    ...data.products.find((product) => product.id === item.id),
    quantity: item.quantity,
  }))

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="title">Your cart is empty</div>
        <div className="description">Add products from the shop to place an order.</div>
        <Button onClick={() => onNavigate('shop')}>Go to shop</Button>
      </div>
    )
  }

  const orderPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = orderPrice + DELIVERY_PRICE

  return (
    <div className="cart">
      <div className="order-wrapper">
        <CartList
          items={cartItems}
          onChangeQuantity={onChangeQuantity}
          onRemove={onRemoveFromCart}
        />
        <OrderSummary orderPrice={orderPrice} delivery={DELIVERY_PRICE} total={total} />
      </div>
      <PromoCode />
    </div>
  )
}

export default Cart
