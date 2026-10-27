import './Sidebar.css'
import Search from './Search.jsx'
import SidebarItem from './SidebarItem.jsx'
import Categories from './Categories.jsx'
import PriceFilter from './PriceFilter.jsx'
import ColorsFilter from './ColorsFilter.jsx'
import ReviewedProducts from './ReviewedProducts.jsx'
import Button from '../../Button/Button.jsx'

function Sidebar({ reviewedProducts }) {
  return (
    <div className="sidebar">
      <Search />

      <SidebarItem title="Categories">
        <Categories />
      </SidebarItem>

      <SidebarItem title="Price">
        <PriceFilter />
      </SidebarItem>

      <SidebarItem title="Colors">
        <ColorsFilter />
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
