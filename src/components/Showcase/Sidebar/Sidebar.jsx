import './Sidebar.css'
import Search from './Search.jsx'
import SidebarItem from './SidebarItem.jsx'
import Categories from './Categories.jsx'
import PriceFilter from './PriceFilter.jsx'
import ColorsFilter from './ColorsFilter.jsx'
import ReviewedProducts from './ReviewedProducts.jsx'
import Button from '../../Button/Button.jsx'

function Sidebar({
  searchValue,
  onSearchChange,
  filters,
  selectedFilters,
  onFilterChange,
  onApplyFilter,
  reviewedProducts,
}) {
  return (
    <div className="sidebar">
      <Search value={searchValue} onChange={onSearchChange} />

      <SidebarItem title="Categories">
        <Categories
          categories={filters.categories}
          activeCategory={selectedFilters.category}
          onChange={(category) => onFilterChange('category', category)}
        />
      </SidebarItem>

      <SidebarItem title="Price">
        <PriceFilter
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          priceFrom={selectedFilters.priceFrom}
          priceTo={selectedFilters.priceTo}
          onPriceFromChange={(value) => onFilterChange('priceFrom', value)}
          onPriceToChange={(value) => onFilterChange('priceTo', value)}
        />
      </SidebarItem>

      <SidebarItem title="Colors">
        <ColorsFilter
          colors={filters.colors}
          selectedColors={selectedFilters.colors}
          onChange={(colors) => onFilterChange('colors', colors)}
        />
      </SidebarItem>

      <SidebarItem>
        <Button onClick={onApplyFilter}>Apply Filter</Button>
      </SidebarItem>

      <SidebarItem title="Reviewed by you">
        <ReviewedProducts products={reviewedProducts} />
      </SidebarItem>

      <div className="sale-banner">
        <a href="#">
          <img src="/img/banner.svg" alt="season sale banner" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
