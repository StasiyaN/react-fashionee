function Search({ value, onChange }) {
  return (
    <div className="search">
      <label>
        <input
          type="text"
          placeholder="Search"
          className="input search-input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <img src="/img/icons/search.svg" alt="search icon" className="search-icon" />
      </label>
    </div>
  )
}

export default Search
