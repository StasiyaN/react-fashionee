import { useState } from 'react'
import './Showcase.css'
import Sidebar from './Sidebar/Sidebar.jsx'
import Products from './Products/Products.jsx'
import data from '../../data/products.json'
import { useDebounce } from '../../hooks/useDebounce.js'
import { SEARCH_DEBOUNCE_DELAY, ALL_CATEGORY } from '../../constants'
import { getFilters } from '../../utils/getFilters.js'

// фильтры считаем один раз — данные из json не меняются
const filters = getFilters(data.products)

// выбранные пользователем значения фильтров по умолчанию
const initialFilters = {
  category: ALL_CATEGORY,
  colors: [],
  priceFrom: '',
  priceTo: '',
}

function Showcase({ favorites, onToggleFavorite, cart, onAddToCart, onChangeQuantity }) {
  const [searchValue, setSearchValue] = useState('') // текст в инпуте — меняется сразу
  const debouncedSearch = useDebounce(searchValue, SEARCH_DEBOUNCE_DELAY) // по нему фильтруем — с задержкой
  const [selectedFilters, setSelectedFilters] = useState(initialFilters) // что выбрано в сайдбаре (применится по Apply Filter)

  // меняем одно поле фильтра: name — 'category' | 'colors' | 'priceFrom' | 'priceTo'
  const changeFilter = (name, value) => {
    setSelectedFilters((prevFilters) => ({ ...prevFilters, [name]: value }))
  }

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
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={changeFilter}
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
