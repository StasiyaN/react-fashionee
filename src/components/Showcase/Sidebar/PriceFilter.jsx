function PriceFilter({ minPrice, maxPrice }) {
  return (
    <div className="price-bar">
      <input type="text" placeholder={minPrice} className="input" />
      <input type="text" placeholder={maxPrice} className="input" />
    </div>
  )
}

export default PriceFilter
