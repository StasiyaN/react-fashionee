import { SORT_VALUES } from '../constants'

// сортируем копию списка, чтобы не менять исходный массив товаров
// By Relevance ничего не сортирует — возвращает товары в исходном порядке
export const sortProducts = (products, sortValue) => {
  const sortedProducts = [...products]

  switch (sortValue) {
    case SORT_VALUES.NAME:
      // sort() на месте, поэтому работаем с копией; при равных названиях порядок сохраняется
      return sortedProducts.sort((firstProduct, secondProduct) =>
        firstProduct.name.localeCompare(secondProduct.name)
      )

    case SORT_VALUES.COLOR:
      // товары с одинаковым цветом остаются в исходном порядке — sort() стабильный
      return sortedProducts.sort((firstProduct, secondProduct) =>
        firstProduct.color.localeCompare(secondProduct.color)
      )

    case SORT_VALUES.PRICE_ASC:
      return sortedProducts.sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price)

    case SORT_VALUES.PRICE_DESC:
      return sortedProducts.sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price)

    default:
      return sortedProducts
  }
}
