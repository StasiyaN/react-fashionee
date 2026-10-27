import './Showcase.css'
import Sidebar from './Sidebar/Sidebar.jsx'
import Products from './Products/Products.jsx'
import data from '../../data/products.json'

function Showcase({ favorites, onToggleFavorite, cart, onAddToCart, onChangeQuantity }) {
  const products = data.products
  const reviewedProducts = products.slice(0, 3)

  return (
    <div className="shop">
      <Sidebar reviewedProducts={reviewedProducts} />
      <Products
        products={products}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        cart={cart}
        onAddToCart={onAddToCart}
        onChangeQuantity={onChangeQuantity}
      />
    </div>
  )
}

export default Showcase
