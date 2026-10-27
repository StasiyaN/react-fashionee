import Button from '../Button/Button.jsx'
import FindUs from '../FindUs/FindUs.jsx'

function PromoCode() {
  return (
    <div className="promo-code-wrapper">
      <div className="info">
        <div className="title">You have a promo code?</div>
        <div className="description">
          To receive up-to-date promotional codes, subscribe to us on social networks.
        </div>
      </div>
      <div className="promo-code">
        <input type="text" name="promo-code" className="input" placeholder="Enter promo code" />
        <Button>
          <img src="/img/icons/promo-arrow.svg" alt="Arrow icon" />
        </Button>
      </div>
      <FindUs />
    </div>
  )
}

export default PromoCode
