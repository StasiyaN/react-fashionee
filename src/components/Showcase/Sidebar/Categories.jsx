function Categories({ categories, activeCategory, onChange }) {
  return (
    <ul className="categories-list">
      {categories.map((category) => (
        <li
          key={category}
          className={category === activeCategory ? 'category active' : 'category'}
          onClick={() => onChange(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}

export default Categories
