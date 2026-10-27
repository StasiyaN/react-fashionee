function SortAndCount({ count }) {
  return (
    <div className="sort-and-count">
      <div className="products-count">
        There are <span className="bold">{count}</span> products in this category
      </div>
      <div className="products-sort">
        <select className="input">
          <option value="RELEVANCE">By relevance</option>
          <option value="ASC">Ascending price</option>
          <option value="DESC">Descending price</option>
        </select>
      </div>
    </div>
  )
}

export default SortAndCount
