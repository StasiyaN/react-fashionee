import './Header.css'

// page — на какую страницу ведёт пункт меню (если ведёт)
const menuItems = [
  { title: 'Home', hasArrow: false },
  { title: 'Pages', hasArrow: true },
  { title: 'Shop', hasArrow: true, page: 'shop' },
  { title: 'Blog', hasArrow: false },
  { title: 'Contact', hasArrow: false },
]

function Header({ currentPage, onNavigate, favoritesCount, cartCount }) {
  return (
    <header className="header">
      <div className="left-side">
        <div className="logo-container">
          <div className="burger-menu">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
            <label className="burger" htmlFor="burger-checkbox"></label>
          </div>
          <div className="logo" onClick={() => onNavigate('shop')}>
            <img src="/img/logo.svg" alt="logo" />
          </div>
        </div>

        <div className="menu">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className={item.page && item.page === currentPage ? 'menu-item active' : 'menu-item'}
              onClick={() => item.page && onNavigate(item.page)}
            >
              <span>{item.title}</span>
              {item.hasArrow && (
                <>
                  <img src="/img/icons/arrow.svg" alt="arrow icon" className="arrow-default" />
                  <img src="/img/icons/arrow-red.svg" alt="arrow icon" className="arrow-hover" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="right-side">
        <div className="header-icon">
          <img src="/img/icons/search.svg" alt="search" />
        </div>
        <div className="header-icon">
          <img src="/img/icons/user.svg" alt="user" />
        </div>
        <div className="header-icon">
          <img src="/img/icons/favorites.svg" alt="favorites" />
          <div className="counter">{favoritesCount}</div>
        </div>
        <div className="header-icon" onClick={() => onNavigate('cart')}>
          <img src="/img/icons/cart.svg" alt="cart" />
          <div className="counter">{cartCount}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
