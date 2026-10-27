import Price from '../Price/Price.jsx'
import Quantity from '../Quantity/Quantity.jsx'

function CartItem({ item, onChangeQuantity, onRemove }) {
  const totalPrice = (item.price * item.quantity).toFixed(2)

  return (
    <div className="product">
      <div className="photo">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="product-info">
        <div className="title">{item.name}</div>
        <div className="price-wrapper">
          <div className="price-and-quantity">
            <Price price={item.price} oldPrice={item.oldPrice} />
            <Quantity
              count={item.quantity}
              onDecrease={() => onChangeQuantity(item.id, -1)}
              onIncrease={() => onChangeQuantity(item.id, 1)}
            />
          </div>
          <div className="total-price">${totalPrice}</div>
        </div>
        <button
          type="button"
          className="close"
          onClick={() => onRemove(item.id)}
          aria-label="Remove from cart"
        >
          x
        </button>
      </div>
    </div>
  )
}

export default CartItem
