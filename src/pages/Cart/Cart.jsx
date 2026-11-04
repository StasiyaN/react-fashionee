import Header from '../../components/Header/Header.jsx'
import ContentBlock from '../../components/ContentBlock/ContentBlock.jsx'
import Cart from '../../components/Cart/Cart.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { PAGES } from '../../constants'

function CartPage({ headerProps, cart, onChangeQuantity, onRemoveFromCart }) {
  return (
    <>
      <Header {...headerProps} />
      <main>
        <ContentBlock
          title="Cart"
          breadcrumbs={[{ title: 'Shop', page: PAGES.SHOP }]}
          onNavigate={headerProps.onNavigate}
        />
        <div className="container">
          <Cart
            cart={cart}
            onChangeQuantity={onChangeQuantity}
            onRemoveFromCart={onRemoveFromCart}
            onNavigate={headerProps.onNavigate}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CartPage
