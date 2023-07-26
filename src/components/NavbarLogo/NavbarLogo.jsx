import { Link } from 'react-router-dom'
import { Logo, LogoMobile } from '../../assets'

const NavbarLogo = ({ view }) => {
  return (
    <div className="navLogo d--flex d--align-center">
        <Link to='/' className='d--block'>
            {
              view==='mobile'
              ? <LogoMobile />
              : <Logo />
            }
        </Link>
    </div>
  )
}

export default NavbarLogo