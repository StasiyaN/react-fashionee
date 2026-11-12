import { ALL_CATEGORY } from '../../../constants'

function Categories({ categories }) {
  const activeCategory = ALL_CATEGORY

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
