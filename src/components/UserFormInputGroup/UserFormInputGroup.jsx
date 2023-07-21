import { useState } from "react"
import {IconInputInvisible, IconInputVisible} from "../../assets/"

const UserFormInputGroup = ({ label, inputType, handleChange, withIcon }) => {
    const [isVisble, setIsVisible] = useState(false)
    
  return (
    <div className='inputGroup d--flex d--flex-col d--gap-05'>
        <label htmlFor={label}>{label}</label>
        <div className="inputGroup__input pos--relative">
            <input 
                autoComplete='false'
                type={inputType==='password' && isVisble ? 'text' : inputType} 
                name={label}
                id={label}
                onChange={handleChange}
            />

            {withIcon && (
                <span 
                    className="cursor--pointer" 
                    onClick={() => {
                        setIsVisible(prevState => !prevState)
                        console.log(isVisble)
                    }}
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