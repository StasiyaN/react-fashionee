function ColorsFilter({ colors, selectedColors, onChange }) {
  // если цвет уже выбран — убираем его из массива, иначе добавляем
  const toggleColor = (color) => {
    onChange(
      selectedColors.includes(color)
        ? selectedColors.filter((selectedColor) => selectedColor !== color)
        : [...selectedColors, color]
    )
  }

  return (
    <div className="colors">
      {colors.map((color) => {
        const id = `color-${color.toLowerCase()}`

        return (
          <div className="color" key={id}>
            <input
              type="checkbox"
              className="color-checkbox"
              id={id}
              name={id}
              value={color}
              checked={selectedColors.includes(color)}
              onChange={() => toggleColor(color)}
            />
            <label htmlFor={id} className="color-name">{color}</label>
          </div>
        )
      })}
    </div>
  )
}

export default ColorsFilter
