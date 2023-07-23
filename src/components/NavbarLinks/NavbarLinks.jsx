import { navLinks } from "../../constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeEffect, heightAnimationVariants } from "../../utils/motion/motion.utils"
const NavbarLinks = () => {
    const [dropdownItems, setDropdownItems] = useState(null)
    const [activeTab, setActiveTab] = useState(null)

    const handleMouseEnter = (items, active) => {
      setDropdownItems(items)
      setActiveTab(active)
    }
    const handleMouseLeave = () => setDropdownItems(null)
 
  return (
    <ul className="nav__links d--flex d--justify-center gap--2">
        {
          navLinks.map((navLink, index) => (
            navLink.subMenu
            ? (
                <li 
                  onMouseEnter={() => handleMouseEnter(navLinks[index].subMenu, index)}
                  onMouseLeave={handleMouseLeave}  
                  className="nav__item height--100 pad--y-1" 
                  key={navLink.id}
                >
                  <button className="nav-link">{navLink.title}</button>
                  {
                    (dropdownItems && index===activeTab) 
                    && (
                      <motion.ul 
                        className="nav__submenu d--flex d--justify-center gap--2 pad--x-default"
                        variants={heightAnimationVariants}
                        initial='hidden'
                        animate={index===activeTab ? 'visible' : 'hidden'}
                        
                      >
                        {
                          dropdownItems.map((navSubmenu) => (
                            <motion.li variants={fadeEffect} key={navSubmenu.id} className="nav__submenu-item pos--relative ">
                              <Link to={navSubmenu.route}>
                                <img src={navSubmenu.image} alt={navSubmenu.title} />
                                <div className="nav__submenu-item-overlay"></div>
                                <h3 className="heading heading--sm">{navSubmenu.title}</h3>
                              </Link>
                            </motion.li>
                          ))
                        }
                      </motion.ul>
                  )
                }
                  
                </li>
              )
            : (
              <li key={navLink.id} className="nav__item pad--y-1">
                <Link route={navLink.route} className={navLink.title==='sale' ? 'nav-link color--danger' : 'nav-link'}>{navLink.title}</Link>
              </li>
            )
          ))
        }
      </ul>
  )
}

export default NavbarLinks