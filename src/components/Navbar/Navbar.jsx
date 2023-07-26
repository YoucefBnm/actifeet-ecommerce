import { 
  NavbarLogo, 
  NavbarLinks, 
  NavbarAccount, 
  NavbarCartIcon 
} from '../'
import './Navbar.scss'

const Navbar = () => {

  return (
    <nav className="nav pad--x-default">
      <NavbarLogo />

      <NavbarLinks />
      
      <div className="nav__utils d--flex d--justify-end pad--y-1 d--align-center gap--2">
        <NavbarAccount />
        <NavbarCartIcon />
      </div>
    </nav>
  )
}

export default Navbar