import { Link } from 'react-router-dom'
import { IconUser } from '../../assets'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { signOutUser } from '../../utils/firebase/firebase.user'

const NavbarAccount = () => {
  const currentUser = useSelector(selectCurrentUser)

  const [isOpen, setIsOpen] = useState(false)

  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => setIsOpen(false)

  const displayName = currentUser && (currentUser.displayName)

  console.log(currentUser)
  return (
    <ul className="navAccount d--flex d--align-center d--gap-2">
        <li className="navAccount__item">
            {
              currentUser ? (
                <div className="navAccount__profile pos--relative">
                  <div 
                    onMouseEnter={() => setIsOpen(true)}
                    style={{ 
                      overflow: 'hidden', 
                      borderRadius: '50%', 
                      width: '3.5rem', 
                      height: '3.5rem', 
                      border:'1px solid #ccc',
                      cursor: 'pointer'
                    }} 
                    className="navAccount__profile-photo d--block"
                  >
                    {
                      currentUser
                      ? (<img src={currentUser.photoURL} className='d--block width--100 height--100' alt='profil photo' />)
                      : (<div className='d--flex d--align-center d--justify-center bg--blue width--100 height--100'>
                          <strong>{displayName[0][0]}</strong>
                          <strong>{displayName[1][0]}</strong>
                          </div>
                        )
                      
                    }
                  </div>
                  {/* <SignoutDropdown 
                    handleMouseLeave={() => setIsOpen(false)}
                    isOpen={isOpen} 
                  /> */}
                  <button onClick={() => {
                    signOutUser()
                    console.log('clic')
                  }}>sigount </button>
                </div>

              ): (
                <Link to='/auth/login'>
                  <img className='d--block' src={IconUser} alt='icon user' />
                </Link>
              )
            }
        </li>
        {/* <CartDropdownBtn /> */}
    </ul>
  )
}

export default NavbarAccount