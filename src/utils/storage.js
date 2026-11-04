// чтение из localStorage: если данных нет или они битые — возвращаем значение по умолчанию
export const loadFromStorage = (key, defaultValue) => {
  try {
    const savedValue = localStorage.getItem(key)
    return savedValue ? JSON.parse(savedValue) : defaultValue
  } catch {
    return defaultValue
  }
}

// запись в localStorage (объекты и массивы сохраняются как JSON-строка)
export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage может быть недоступен (например, в приватном режиме) — просто не сохраняем
  }
}
