import { motion } from "framer-motion"
import './ShopNav.scss'
import ShopFiltersGroup from "../ShopFiltersGroup/ShopFiltersGroup"

const ShopNav = ({ shopFilters }) => {
  
  return (
    <motion.nav layoutScroll className="shopNav">
      <ul className="shopNav__checkedFilters">
        checked filters
      </ul>

      {
        Object.keys(shopFilters).map(filter => (
          shopFilters[filter].length > 1 && (
            <ShopFiltersGroup
              key={filter}
              filterTitle={filter}
              filters={shopFilters[filter]}
              handleChange={e => {
                console.log(e)
              }}
            />
          )
        ))
      }
    </motion.nav>
  )
}

export default ShopNav