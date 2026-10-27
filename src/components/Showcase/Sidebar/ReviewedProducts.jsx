import Price from '../../Price/Price.jsx'

function ReviewedProducts({ products }) {
  return (
    <div className="reviewed-products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="info">
            <div className="name">{product.name}</div>
            <Price price={product.price} oldPrice={product.oldPrice} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewedProducts
