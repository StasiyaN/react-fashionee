function Quantity({ count }) {
  return (
    <div className="quantity">
      <div className="count-btn">-</div>
      <div className="count">{count}</div>
      <div className="count-btn">+</div>
    </div>
  )
}

export default Quantity
