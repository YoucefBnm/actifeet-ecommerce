import { Link } from 'react-router-dom'
import { IconUser } from '../../assets'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'

const NavbarAccount = () => {
  const [isOpen, setIsOpen] = useState(false)

  const currentUser = useSelector(selectCurrentUser)

  currentUser && console.log(currentUser)
  return (
    <div className="navAccount d--flex d--align-center d--gap-2">
      <div className="navAccount__item">
        {
          currentUser ? (
            <div className="navAccount__profile pos--relative">
              <div 
                onMouseEnter={() => setIsOpen(true)}
                className='navAccount__profile-photo d--block overflow-hidden cursor--pointer'
                style={{ 
                  borderRadius: '50%',
                  width: '3.5rem',
                  height: '3.5rem',
                  border: '1px solid #ccc'
                }}
              >
                {
                  currentUser.photoURL
                  ? (<img 
                      src={currentUser.photoURL} 
                      className='d--block width--100 height--100'
                      alt='profile photo'
                    />
                    ) 
                    : (<div className='d--flex d--align-center d--justify-center bg--blue width--100 height--100'>
                        <strong>{currentUser.displayName}</strong>
                        {/* <strong>{displayName[0][0]}</strong> */}
                        {/* <strong>{displayName[1][0]}</strong> */}
                      </div>)
                }
              </div>
              signout 
            </div>
          ) : (
            <Link className='d--block' to='/auth/login'>
              <IconUser />
            </Link> 
          )
        }
      </div>
    </div>
  )
}

export default NavbarAccount

{/* <Link className='d--block' to='/auth/login'>
      <IconUser />
    </Link> */}