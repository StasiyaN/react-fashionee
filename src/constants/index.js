export const PAGES = {
    CART: 'cart',
    SHOP: 'shop'
}

export const DELIVERY_PRICE = 16

export const SEARCH_DEBOUNCE_DELAY = 500 // мс

export const ALL_CATEGORY = 'All'

// варианты сортировки товаров
export const SORT_VALUES = {
    RELEVANCE: 'relevance', // исходный порядок товаров — ничего не меняем
    NAME: 'name',
    COLOR: 'color',
    PRICE_ASC: 'price-asc',
    PRICE_DESC: 'price-desc'
}

export const SORT_OPTIONS = [
    { value: SORT_VALUES.RELEVANCE, label: 'By Relevance' },
    { value: SORT_VALUES.NAME, label: 'By Name' },
    { value: SORT_VALUES.COLOR, label: 'By Color' },
    { value: SORT_VALUES.PRICE_ASC, label: 'Ascending price' },
    { value: SORT_VALUES.PRICE_DESC, label: 'Descending price' }
]

export const STORAGE_KEYS = {
    CART: 'fashionee-cart',
    FAVORITES: 'fashionee-favorites'
}
