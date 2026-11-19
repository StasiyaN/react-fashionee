// нарезаем список товаров на страницы: возвращаем товары текущей страницы и данные для Pagination
export const getPageItems = (items, page, perPage) => {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  // если запрошенной страницы нет — показываем ближайшую существующую
  const currentPage = Math.min(Math.max(page, 1), totalPages)
  const startIndex = (currentPage - 1) * perPage

  return {
    items: items.slice(startIndex, startIndex + perPage),
    currentPage,
    totalPages,
  }
}
