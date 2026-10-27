import './Footer.css'
import FindUs from '../FindUs/FindUs.jsx'

const aboutLinks = ['About us', 'Collections', 'Shop', 'Blog', 'Contact us']

const usefulLinks = ['Privacy Policy', 'Terms of use', 'Support', 'Shipping details', 'FAQs']

const paymentMethods = ['visa', 'mastercard', 'paypal', 'payoneer']

function Footer() {
  return (
    <footer className="footer">
      <img src="/img/small-dots.svg" alt="" className="small-dots" />
      <img src="/img/big-dots.svg" alt="" className="big-dots" />
      <div className="container">
        <div className="footer-info">
          <div className="footer-info-column column-1">
            <div className="logo">
              <img src="/img/logo.svg" alt="logo" />
            </div>
            <div className="about-brand">
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
            </div>
            <FindUs />
          </div>

          <div className="footer-info-column column-2">
            <div className="title">About</div>
            <ul className="links">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-info-column column-3">
            <div className="title">Useful Links</div>
            <ul className="links">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="copyrights">
          <div>© All right reserved. Fashionee 2020</div>
          <div className="payment-methods-container">
            <div>Payment methods:</div>
            <div className="payment-methods">
              {paymentMethods.map((method) => (
                <div className="payment-method" key={method}>
                  <img src={`/img/icons/${method}.svg`} alt={`${method} icon`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
