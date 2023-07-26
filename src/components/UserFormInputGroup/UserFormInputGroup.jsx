import { useState } from "react"
import {IconInputInvisible, IconInputVisible} from "../../assets/"

const UserFormInputGroup = ({ label, withIcon, type, ...otherProps }) => {
    const [isVisble, setIsVisible] = useState(false)
    
    const setPasswordVisibility = () => setIsVisible(prevState => !prevState)

  return (
    <div className='inputGroup d--flex d--flex-col d--gap-05'>
        {label && <label htmlFor={label}>{label}</label>}

        <div className="inputGroup__input pos--relative">
            <input 
                autoComplete='false'
                type={type==='password' && isVisble ? 'text' : type} 
                {...otherProps}
            />

            {withIcon && (
                <span 
                    className="cursor--pointer" 
                    onClick={setPasswordVisibility}
                    style={{ 
                        position: 'absolute', 
                        right: '1rem',
                        width: '2rem',
                        display: 'inline-flex',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                >
                    {
                        isVisble ? <IconInputInvisible />
                        : <IconInputVisible />
                    }
                </span>
            )}
        </div>
        
    </div>
  )
}

export default UserFormInputGroup