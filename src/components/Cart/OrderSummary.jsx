import OrderRow from './OrderRow.jsx'
import Button from '../Button/Button.jsx'

function OrderSummary({ orderPrice, delivery, total }) {
  return (
    <div className="your-order">
      <div className="title">Your Order</div>
      <div className="order-price-wrapper">
        <OrderRow label="Order price">
          <div className="price">${orderPrice.toFixed(2)}</div>
        </OrderRow>

        <OrderRow label="Discount for promo code">
          <div>No</div>
        </OrderRow>

        <OrderRow
          className="delimiter"
          label={<>Delivery <span className="date">(Aug 02 at 16:00)</span></>}
        >
          <div className="price">${delivery}</div>
        </OrderRow>

        <OrderRow className="total" label="Total">
          <div className="price">${total.toFixed(2)}</div>
        </OrderRow>

        <Button>Checkout</Button>
      </div>
    </div>
  )
}

export default OrderSummary
