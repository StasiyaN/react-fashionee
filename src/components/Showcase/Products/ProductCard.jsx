import Price from '../../Price/Price.jsx'
import HeartIcon from '../../HeartIcon/HeartIcon.jsx'
import Button from '../../Button/Button.jsx'
import Quantity from '../../Quantity/Quantity.jsx'

function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  cartQuantity,
  onAddToCart,
  onChangeQuantity,
}) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} className="image" />
        <div className="top-bar">
          <div className="labels">
            {product.isSale && <div className="label sale">Sale</div>}
            {product.isNew && <div className="label new">New</div>}
          </div>
          <button
            type="button"
            className="favorites"
            onClick={() => onToggleFavorite(product.id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <HeartIcon active={isFavorite} />
          </button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-description">{product.name}</div>
        <Price price={product.price} oldPrice={product.oldPrice} />
      </div>
      <div className="product-actions">
        {cartQuantity === 0 ? (
          <Button onClick={() => onAddToCart(product.id)}>Buy</Button>
        ) : (
          <Quantity
            count={cartQuantity}
            onDecrease={() => onChangeQuantity(product.id, -1)}
            onIncrease={() => onChangeQuantity(product.id, 1)}
          />
        )}
      </div>
    </div>
  )
}

export default ProductCard
