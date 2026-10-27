function OrderRow({ label, className = '', children }) {
  return (
    <div className={`check-out ${className}`}>
      <div className="text">{label}</div>
      {children}
    </div>
  )
}

export default OrderRow
