import { Fragment } from 'react'
import './FindUs.css'

const socialLinks = ['Fb', 'tw', 'ins', 'pt']

function FindUs() {
  return (
    <div className="find-us">
      <div className="find-us-text">Find us here:</div>
      <div className="find-us-links">
        {socialLinks.map((link, index) => (
          <Fragment key={link}>
            {index > 0 && <div className="line"></div>}
            <div className="find-us-link">
              <a href="#">{link}</a>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default FindUs
