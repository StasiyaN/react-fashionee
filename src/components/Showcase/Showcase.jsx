import { useState } from 'react'
import './Showcase.css'
import Sidebar from './Sidebar/Sidebar.jsx'
import Products from './Products/Products.jsx'
import data from '../../data/products.json'
import { useDebounce } from '../../hooks/useDebounce.js'
import { SEARCH_DEBOUNCE_DELAY } from '../../constants'

function Showcase({ favorites, onToggleFavorite, cart, onAddToCart, onChangeQuantity }) {
  const [searchValue, setSearchValue] = useState('') // текст в инпуте — меняется сразу
  const debouncedSearch = useDebounce(searchValue, SEARCH_DEBOUNCE_DELAY) // по нему фильтруем — с задержкой

  const products = data.products
  const reviewedProducts = products.slice(0, 3)

  const query = debouncedSearch.trim().toLowerCase()
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  )

  return (
    <div className="shop">
      <Sidebar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        reviewedProducts={reviewedProducts}
      />
      <Products
        products={filteredProducts}
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
