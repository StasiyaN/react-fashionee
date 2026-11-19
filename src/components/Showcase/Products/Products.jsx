import { useRef, useState } from 'react'
import './Products.css'
import SortAndCount from './SortAndCount.jsx'
import ProductCard from './ProductCard.jsx'
import Pagination from './Pagination.jsx'
import { PRODUCTS_PER_PAGE } from '../../../constants'
import { getPageItems } from '../../../utils/paginate.js'

function Products({
  products,
  favorites,
  onToggleFavorite,
  cart,
  onAddToCart,
  onChangeQuantity,
  sortValue,
  onSortChange,
}) {
  const [page, setPage] = useState(1)
  const wrapperRef = useRef(null) // нужен, чтобы подниматься к списку при смене страницы

  // список товаров изменился (фильтр, поиск, сортировка) — начинаем с первой страницы
  // setState прямо в рендере допустим: React сразу перерисует компонент, а сравнение не даст зациклиться
  const productsKey = products.map((product) => product.id).join(',')
  const [prevProductsKey, setPrevProductsKey] = useState(productsKey)

  if (productsKey !== prevProductsKey) {
    setPrevProductsKey(productsKey)
    setPage(1)
  }

  const { items: pageProducts, currentPage, totalPages } = getPageItems(
    products,
    page,
    PRODUCTS_PER_PAGE
  )

  // сколько штук этого товара уже в корзине (0 — если нет)
  const getCartQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    return cartItem ? cartItem.quantity : 0
  }

  const changePage = (newPage) => {
    setPage(newPage)
    // при смене страницы поднимаемся к началу списка товаров
    wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="products-wrapper" ref={wrapperRef}>
      <SortAndCount count={products.length} sortValue={sortValue} onSortChange={onSortChange} />

      <div className="products">
        {pageProducts.map((product) => (
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={changePage}
      />
    </div>
  )
}

export default Products
