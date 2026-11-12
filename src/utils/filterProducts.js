import { ALL_CATEGORY } from '../constants'

// оставляем только товары, которые подходят под поиск и все применённые фильтры
export const filterProducts = (products, search, filters) => {
  const query = search.trim().toLowerCase()
  const { category, colors, priceFrom, priceTo } = filters

  return products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(query)
    const matchesCategory = category === ALL_CATEGORY || product.categories.includes(category)
    const matchesColor = colors.length === 0 || colors.includes(product.color)
    const matchesPriceFrom = priceFrom === '' || product.price >= Number(priceFrom)
    const matchesPriceTo = priceTo === '' || product.price <= Number(priceTo)

    return matchesSearch && matchesCategory && matchesColor && matchesPriceFrom && matchesPriceTo
  })
}
