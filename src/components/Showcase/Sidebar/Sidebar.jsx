import './Sidebar.css'
import Search from './Search.jsx'
import SidebarItem from './SidebarItem.jsx'
import Categories from './Categories.jsx'
import PriceFilter from './PriceFilter.jsx'
import ColorsFilter from './ColorsFilter.jsx'
import ReviewedProducts from './ReviewedProducts.jsx'
import Button from '../../Button/Button.jsx'

function Sidebar({ searchValue, onSearchChange, filters, reviewedProducts }) {
  return (
    <div className="sidebar">
      <Search value={searchValue} onChange={onSearchChange} />

      <SidebarItem title="Categories">
        <Categories categories={filters.categories} />
      </SidebarItem>

      <SidebarItem title="Price">
        <PriceFilter minPrice={filters.minPrice} maxPrice={filters.maxPrice} />
      </SidebarItem>

      <SidebarItem title="Colors">
        <ColorsFilter colors={filters.colors} />
      </SidebarItem>

      <SidebarItem>
        <Button>Apply Filter</Button>
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
