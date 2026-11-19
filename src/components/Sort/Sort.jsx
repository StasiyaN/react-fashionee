import './Sort.css'
import { SORT_OPTIONS } from '../../constants'

// выпадающий список сортировки: только показывает варианты и сообщает о выборе
function Sort({ value, onChange }) {
  return (
    <div className="sort">
      <select
        className="input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Sort
