import { motion } from 'framer-motion'
import { shopFiltersOpen } from '../../hooks/shopFiltersOpen'
import { fadeEffect, heightAnimationVariants } from '../../utils/motion/motion.utils'

import './ShopFiltersGroup.scss'

const ShopFiltersGroup = ({ filterTitle, filters, handleChange}) => {

    shopFiltersOpen(filterTitle)
    
    const handleClick = () => setIsOpen(prevState => !prevState)

    const sortedFilters = filters.sort((a,b) => {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    })
  return (
    <div className="shopFiltersGroup">
        <div 
            // className={`${isOpen ? 'shopFiltersGroup_title open' : 'shopFiltersGroup__title'}`}
            className='shopFiltersGroup__title'
            onClick={handleClick}
        >
            <h4 className="heading heading--xs">{filterTitle}</h4>
        </div>

        <motion.ul
            className={`shopFiltersGroup__list ${filterTitle}`}
            // variants={heightAnimationVariants}
            // initial={isOpen ? 'visible' : 'hidden'}
            // animate={isOpen ? 'visible' : 'hidden'}
        >
            {
                sortedFilters.map(filter => (
                    <motion.li variants={fadeEffect} key={filter.name}>
                        <label className={`shopFiltersGroup__input`}>
                            <input 
                                type='checkbox'
                                // checked={filter.isChecked}
                                onChange={handleChange}
                                className='shopFiltersGroup__checkbox' 
                            />
                            <span 
                                className={`shopFiltersGroup__checkbox-checkmark ${filterTitle}`}
                                style={filterTitle==='color' ? { backgroundColor: filter.name} : { backgroundColor: 'none'}}
                            />
                            <span id="filter-value">{filter.name}</span>
                        </label>
                    </motion.li>
                ))
            }
        </motion.ul>

    </div>
  )
}

export default ShopFiltersGroup