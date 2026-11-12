import { useState, useEffect } from 'react'
import './App.css'
import ShopPage from './pages/Shop/Shop.jsx'
import CartPage from './pages/Cart/Cart.jsx'
import { PAGES, STORAGE_KEYS } from './constants'
import { loadFromStorage, saveToStorage } from './utils/storage.js'

function App() {
  const [page, setPage] = useState(PAGES.SHOP)
  // начальное значение берём из localStorage (функция в useState вызывается только при первом рендере)
  const [favorites, setFavorites] = useState(() => loadFromStorage(STORAGE_KEYS.FAVORITES, [])) // id товаров в избранном
  const [cart, setCart] = useState(() => loadFromStorage(STORAGE_KEYS.CART, [])) // товары в корзине: [{ ...product, quantity }] — храним весь объект товара, чтобы не искать его по id в каталоге

  // при каждом изменении избранного / корзины сохраняем их в localStorage
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.FAVORITES, favorites)
  }, [favorites])

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CART, cart)
  }, [cart])

  const navigate = (newPage) => {
    setPage(newPage)
    window.scrollTo(0, 0)
  }

  // ----- избранное -----
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id]
    )
  }

  // ----- корзина -----
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
  }

  // delta: +1 или -1; если количество стало 0 — товар удаляется из корзины
  const changeQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const headerProps = {
    currentPage: page,
    onNavigate: navigate,
    favoritesCount: favorites.length,
    cartCount,
  }

  return page === PAGES.SHOP ? (
    <ShopPage
      headerProps={headerProps}
      favorites={favorites}
      onToggleFavorite={toggleFavorite}
      cart={cart}
      onAddToCart={addToCart}
      onChangeQuantity={changeQuantity}
    />
  ) : (
    <CartPage
      headerProps={headerProps}
      cart={cart}
      onChangeQuantity={changeQuantity}
      onRemoveFromCart={removeFromCart}
    />
  )
}

export default App
