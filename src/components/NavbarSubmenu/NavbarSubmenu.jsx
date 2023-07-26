import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { fadeEffect } from "../../utils/motion/motion.utils"
import CustomBtn from "../CustomBtn/CustomBtn"
import './NavbarSubmenu.scss'

const NavbarSubmenu = ({ variants, activeTab, currentTab, submenuItems, cta }) => {
  return (
    <motion.div 
        variants={variants}
        initial='hidden'
        animate={activeTab===currentTab ? 'visible' : 'hidden'}
        className="navSubmenu pad--y-2"
    >
        <ul className="navSubmenu__inner d--flex d--justify-between">
            {
                submenuItems.map(submenuItem => (
                    <motion.div 
                        variants={fadeEffect}
                        key={submenuItem.id}
                        className="navSubmenu__col"
                    >
                        <h4 className="mar--b-2">{submenuItem.title}</h4>
                        <ul className="navSubmenu__links d--flex d--flex-col gap--05">
                            {
                                submenuItem.subLinks.map(subLink => (
                                    <li key={subLink.id}>
                                        <Link to={subLink.route} className="nav-link nav-link--sub">
                                            <span>{subLink.title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.div>
                ))
            }
            <motion.div 
                className="navSubmenu__cta"
                variants={fadeEffect}
            >
                <img src={cta.image} alt='athletic shoes' />
                <h4>{cta.title}</h4>
                <p>{cta.paragraph}</p>
                <CustomBtn
                    btnStlye='btn btn--link color--danger'
                    route={cta.route}
                    text='Shop Now'
                />
            </motion.div>
        </ul>
    </motion.div>
  )
}

export default NavbarSubmenu