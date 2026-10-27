import './Button.css'

function Button({ children, type = 'button', onClick }) {
  return (
    <div className="button-wrapper">
      <button className="button" type={type} onClick={onClick}>
        {children}
      </button>
      <div className="button-line"></div>
    </div>
  )
}

export default Button
