import { Link } from "react-router-dom"
import { LogoLight } from "../../assets"
import { FooterNavLinks } from "../../constants"
import './FooterNav.scss'

const FooterNav = () => {
    const { navigation, social } = FooterNavLinks

  return (
    <nav className="footerNav bg--dark pad--x-default pad--y-default d--flex d--justify-between">
        <div className="footerNav__brand">
            <div className="footerNav__logo mar--b-2">
                <LogoLight />
            </div>
            <p>Your destination for premium running, cross-training, climbing and more.</p>
        </div>

        <ul className="footerNav__navigation d--flex d--justify-center gap--3">
            {
                navigation.map(navItem => (
                    <li key={navItem.id}>
                        <h4 className="nav-link mar--b-2">{navItem.title}</h4>
                        <ul className="d--flex d--flex-col gap--05">
                            {
                                navItem.links.map(navItemLink => (
                                    <li key={navItemLink.id}>
                                        <Link to={navItemLink.route}>
                                            <span className="nav-link nav-link--sub">{navItemLink.title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                ))
            }
            
        </ul>

        <ul className="footerNav__social d--flex d--flex-col gap--2">
            <h4 className="nav-link">follow us</h4>
            <ul className="footerNav__social-nav d--flex gap--1">
                {
                    social.map(navSocial => (
                        <li key={navSocial.id}>
                            <Link to={navSocial.route}>
                                <img src={navSocial.image} alt='social link' />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </ul>
    </nav>
  )
}

export default FooterNav