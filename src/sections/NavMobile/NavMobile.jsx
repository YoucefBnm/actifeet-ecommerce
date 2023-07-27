import { Link } from 'react-router-dom'
import {NavbarAccount, NavbarCartIcon, NavbarLogo} from '../../components'
import { IconChevronLeft, IconChevronRight } from '../../assets'
import { navMobileLinks } from '../../constants'
import { motion } from 'framer-motion'
import { navMobileVariants } from '../../utils/motion/motion.utils'
import { useState } from 'react'

import './NavMobile.scss'

const NavMobile = () => {
      const [navLinksOpen, setNavLinksOpen] = useState(false)
      const [navSubmenuOpen, setNavSubmenuOpen] = useState(false)
      const [activeTab, setActiveTab] = useState(null)

      const handleNavLinks = () => setNavLinksOpen(prevState => !prevState)

      const openSubMenu = (active) => {
        setNavSubmenuOpen(true)
        setActiveTab(active)
      }

      const closeSubmenu = () => {
        setNavSubmenuOpen(false)
        setActiveTab(null)
      }

  return (
    <nav 
        className={navLinksOpen ? 'navMobile overflow--visible' : 'navMobile overflow--hidden'}
    >
        <div className="navMobile__top d--flex d--justify-between pad--y-1 pad--x-default">
            <NavbarLogo view='mobile' />

            <div className="navMobile__utils d--flex d--align-center gap--2">
                <NavbarAccount />
                <NavbarCartIcon />
                <motion.button 
                    className="navMobile__toggle d--flex d--flex-col cursor--pointer"
                    onClick={handleNavLinks}
                    whileHover={{ opacity: .5 }}
                >
                    <motion.span 
                        animate={ navLinksOpen ? { rotate: '-45deg', translateY: '8px'} : { rotate: 0 }}

                    />
                    <motion.span 
                        animate={ navLinksOpen ? { scaleX: 0 } : { scaleX: 1}}

                    />
                    <motion.span 
                        animate={ navLinksOpen ? { rotate: '45deg', translateY: '-4px'} : { rotate: 0 }}
                    />
                </motion.button>
            </div>
        </div>

        <motion.ul 
            className="navMobile__sub d--flex d--flex-col gap--1 pad--y-2 overflow--hidden"
            variants={navMobileVariants}
            initial='hidden'
            animate={navLinksOpen ? 'visible' : 'hidden'}
        >
            {
                navMobileLinks.map((navLink, index) => (
                    navLink.subMenu
                    ? (
                        <li key={navLink.id} className='navMobile__item'>
                            <button 
                                className='nav-link d--flex-inline gap--2 cursor--pointer'
                                onClick={() => openSubMenu(index)}
                            >
                                <span>{navLink.title}</span>
                                <span><IconChevronRight /></span>
                            </button>

                            <motion.ul 
                                className="navMobile__submenu pad--y-2"
                                variants={navMobileVariants}
                                initial='hidden'
                                animate={navSubmenuOpen&&activeTab===index ? 'visible' : 'hidden'}
                            >
                               <motion.div>
                                    <button 
                                        id='btn-close-submenu'
                                        onClick={closeSubmenu}
                                        className='mar--b-2 cursor--pointer d--flex gap--05'
                                    >
                                        <span><IconChevronLeft /></span>
                                        <span>Back</span>
                                    </button>
                                    <ul className="navMobile__submenu-items d--flex d--flex-col gap--1">
                                        {
                                            navLink.subMenu.map((navSubmenuItem) => (
                                                <li key={navSubmenuItem.id}>
                                                    <Link to={navSubmenuItem.route}>
                                                        <span>{navSubmenuItem.title}</span>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </motion.div>
                            </motion.ul>
                        </li>
                    )
                    : (
                        <li key={navLink.id} className='navMobile__item'>
                            <Link to={navLink.route} className={navLink.title==='sale' ? 'nav-link color--danger' : 'nav-link'}>
                                <span>{navLink.title}</span>
                            </Link>
                        </li>
                    )
                ))
            }
        </motion.ul>
    </nav>
  )
}

export default NavMobile