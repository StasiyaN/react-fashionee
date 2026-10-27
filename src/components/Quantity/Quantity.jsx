import './Quantity.css'

function Quantity({ count, onDecrease, onIncrease }) {
  return (
    <div className="quantity">
      <button type="button" className="count-btn" onClick={onDecrease} aria-label="Decrease">
        -
      </button>
      <div className="count">{count}</div>
      <button type="button" className="count-btn" onClick={onIncrease} aria-label="Increase">
        +
      </button>
    </div>
  )
}

export default Quantity
