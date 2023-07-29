import { navbarLinks } from "../../constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { heightAnimationVariants } from "../../utils/motion/motion.utils"
import NavbarSubmenu from "../NavbarSubmenu/NavbarSubmenu"

const NavbarLinks = () => {
    const [activeTab, setActiveTab] = useState(null)
 
  return (
    <div className="ul navLinks d--flex d--justify-center gap--2">
      {
        navbarLinks.map((navLink, index) => {
          const { id, title, route, submenu } = navLink
          
          const openSubmenu = index => setActiveTab(index)
          const closeSubmenu = () => setActiveTab(null)

          return (
            submenu
            ? (
              <motion.li 
                key={id}
                className="navLinks__item pad--y-2 height--100 d--flex d-align-center"
                onMouseEnter={() => openSubmenu(index)}
                onMouseLeave={closeSubmenu}
              >
                <button className="nav-link">
                  <span>{title}</span>
                </button>
                
                <NavbarSubmenu
                  variants={heightAnimationVariants}
                  activeTab={activeTab}
                  currentTab={index}
                  submenuItems={submenu.links}
                  cta={submenu.cta}
                />
              </motion.li>
            )
            : (
              <li 
                key={id}
                className="navLinks__item pad--y-2 height--100 d--flex d--align-center"
              >
                <Link
                  to={route}
                  className={title==='sale' ? 'nav-link color--danger' : 'nav-link'}
                >
                  <span>{title}</span>
                </Link>
              </li>
            )
          )
        })
      }
    </div>
  )
}

export default NavbarLinks