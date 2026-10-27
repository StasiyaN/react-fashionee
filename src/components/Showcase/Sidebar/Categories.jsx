const categories = ['All', 'Men', 'Women', 'Accessories', 'New Arrivals']

function Categories() {
  const activeCategory = 'Men'

  return (
    <ul className="categories-list">
      {categories.map((category) => (
        <li
          key={category}
          className={category === activeCategory ? 'category active' : 'category'}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}

export default Categories
