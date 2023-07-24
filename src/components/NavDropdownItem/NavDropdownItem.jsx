import { motion } from "framer-motion"
import { fadeEffect } from "../../utils/motion/motion.utils"
import { useState } from "react"
import { Link } from "react-router-dom"

const NavDropdownItem = ({ item }) => {
    const [isMouseIn, setIsMouseIn] = useState(false)

    const handleMouseIn = () => setIsMouseIn(true)
    const handleMouseOut = () => setIsMouseIn(false)

    const { route, image, title } = item
  return (
    <motion.li
        variants={fadeEffect}
        className="nav__submenu-item pos--relative"
        onMouseEnter={handleMouseIn}
        onMouseOut={handleMouseOut}
    >
        <Link to={route}>
            <motion.img 
                src={image} 
                alt={title} 
                animate={isMouseIn ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: .25 }}
            />
            <div className="nav__submenu-item-overlay"></div>
            <h3 className="heading heading--sm">{title}</h3>
        </Link>
    </motion.li>
  )
}

export default NavDropdownItem