import './ContentBlock.css'

// title — название страницы (Shop, Cart)
// breadcrumbs — промежуточные ссылки между Home и текущей страницей,
// например для Cart: [{ title: 'Shop', page: 'shop' }]
// onNavigate — функция переключения страницы из App
function ContentBlock({ title, breadcrumbs = [], onNavigate }) {
  const handleClick = (event, page) => {
    event.preventDefault()
    onNavigate(page)
  }

  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-left">
          <img src="/img/big-dots.svg" alt="" className="banner-big-dots" />
          <div className="banner-line"></div>
          <div className="banner-text">
            <h1>{title}</h1>
            <div className="menu">
              <ul>
                <li className="home">Home</li>
                {breadcrumbs.map((item) => (
                  <li key={item.title}>
                    <a href="#" onClick={(event) => handleClick(event, item.page)}>
                      {item.title}
                    </a>
                  </li>
                ))}
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="photo"></div>
      </div>
    </div>
  )
}

export default ContentBlock
