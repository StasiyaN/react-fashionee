import './Price.css'

function Price({ price, oldPrice }) {
  return (
    <div className="price">
      <div className="current-price">${price}</div>
      {oldPrice && <div className="old-price">${oldPrice}</div>}
    </div>
  )
}

export default Price
