import Header from '../../components/Header/Header.jsx'
import ContentBlock from '../../components/ContentBlock/ContentBlock.jsx'
import Showcase from '../../components/Showcase/Showcase.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function ShopPage({
  headerProps,
  favorites,
  onToggleFavorite,
  cart,
  onAddToCart,
  onChangeQuantity,
}) {
  return (
    <>
      <Header {...headerProps} />
      <main>
        <ContentBlock title="Shop" onNavigate={headerProps.onNavigate} />
        <div className="container">
          <Showcase
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
            cart={cart}
            onAddToCart={onAddToCart}
            onChangeQuantity={onChangeQuantity}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ShopPage
