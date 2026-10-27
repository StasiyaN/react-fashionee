import './Products.css'
import SortAndCount from './SortAndCount.jsx'
import ProductCard from './ProductCard.jsx'
import Pagination from './Pagination.jsx'

function Products({ products, favorites, onToggleFavorite, cart, onAddToCart, onChangeQuantity }) {
  // сколько штук этого товара уже в корзине (0 — если нет)
  const getCartQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    return cartItem ? cartItem.quantity : 0
  }

  return (
    <div className="products-wrapper">
      <SortAndCount count={products.length} />

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
            cartQuantity={getCartQuantity(product.id)}
            onAddToCart={onAddToCart}
            onChangeQuantity={onChangeQuantity}
          />
        ))}
      </div>

      <Pagination />
    </div>
  )
}

export default Products
