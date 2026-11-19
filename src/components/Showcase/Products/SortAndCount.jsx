import Sort from '../../Sort/Sort.jsx'

function SortAndCount({ count, sortValue, onSortChange }) {
  return (
    <div className="sort-and-count">
      <div className="products-count">
        There are <span className="bold">{count}</span> products in this category
      </div>
      <Sort value={sortValue} onChange={onSortChange} />
    </div>
  )
}

export default SortAndCount
