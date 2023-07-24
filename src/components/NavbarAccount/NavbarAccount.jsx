import { Link } from 'react-router-dom'
import { IconUser, IconUserMobile } from '../../assets'

const NavbarAccount = () => {
  
  return (
    <Link className='d--block' to='/auth/login'>
      <IconUser />
    </Link>
  )
}

export default NavbarAccount