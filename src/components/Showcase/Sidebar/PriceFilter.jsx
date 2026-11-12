// оставляем в строке только цифры
const onlyDigits = (value) => value.replace(/\D/g, '')

function PriceFilter({ minPrice, maxPrice, priceFrom, priceTo, onPriceFromChange, onPriceToChange }) {
  return (
    <div className="price-bar">
      <input
        type="text"
        inputMode="numeric"
        placeholder={minPrice}
        className="input"
        value={priceFrom}
        onChange={(event) => onPriceFromChange(onlyDigits(event.target.value))}
      />
      <input
        type="text"
        inputMode="numeric"
        placeholder={maxPrice}
        className="input"
        value={priceTo}
        onChange={(event) => onPriceToChange(onlyDigits(event.target.value))}
      />
    </div>
  )
}

export default PriceFilter
