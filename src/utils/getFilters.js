import { ALL_CATEGORY } from '../constants'

// собираем доступные фильтры из списка товаров
export const getFilters = (products) => {
  const categories = new Set() // Set хранит только уникальные значения
  const colors = new Set()

  products.forEach((product) => {
    product.categories.forEach((category) => categories.add(category))
    colors.add(product.color)
  })

  const prices = products.map((product) => product.price)

  return {
    categories: [ALL_CATEGORY, ...categories],
    colors: [...colors],
    minPrice: Math.floor(Math.min(...prices)),
    maxPrice: Math.ceil(Math.max(...prices)),
  }
}
