import { useState, useEffect } from 'react'

// возвращает value с задержкой: обновляется только когда value не меняется delay мс
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay)

    // если value изменилось раньше, чем прошёл delay — отменяем предыдущий таймер
    return () => clearTimeout(timerId)
  }, [value, delay])

  return debouncedValue
}
