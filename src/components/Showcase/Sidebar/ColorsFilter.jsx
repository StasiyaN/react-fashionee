const colors = ['Black', 'Blue', 'Red', 'Yellow', 'Green']

function ColorsFilter() {
  return (
    <div className="colors">
      {colors.map((color) => {
        const id = color.toLowerCase()

        return (
          <div className="color" key={id}>
            <input type="checkbox" className="color-checkbox" id={id} name={id} value={id} />
            <label htmlFor={id} className="color-name">{color}</label>
          </div>
        )
      })}
    </div>
  )
}

export default ColorsFilter
