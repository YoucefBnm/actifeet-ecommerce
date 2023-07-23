import { Link } from 'react-router-dom'
import { Logo } from '../../assets'

const NavbarLogo = () => {
  return (
    <div className="nav__logo nav__item">
        <Link to='/' className='d--block'>
            <Logo />
        </Link>
    </div>
  )
}

export default NavbarLogo