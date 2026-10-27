import CartItem from './CartItem.jsx'

function CartList({ items, onChangeQuantity, onRemove }) {
  return (
    <div className="product-list">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onChangeQuantity={onChangeQuantity}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default CartList
