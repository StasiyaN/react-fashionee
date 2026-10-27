import { useState } from 'react'
import './App.css'
import ShopPage from './pages/Shop/Shop.jsx'
import CartPage from './pages/Cart/Cart.jsx'

function App() {
  const [page, setPage] = useState('shop') // 'shop' | 'cart'
  const [favorites, setFavorites] = useState([]) // id товаров в избранном
  const [cart, setCart] = useState([]) // товары в корзине: [{ id, quantity }]

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
  const addToCart = (id) => {
    setCart((prevCart) => [...prevCart, { id, quantity: 1 }])
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

  return page === 'shop' ? (
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
