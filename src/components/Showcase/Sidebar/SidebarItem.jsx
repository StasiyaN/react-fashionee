function SidebarItem({ title, children }) {
  return (
    <div className="sidebar-item">
      {title && <div className="sidebar-title">{title}</div>}
      <div className="sidebar-content">{children}</div>
    </div>
  )
}

export default SidebarItem
