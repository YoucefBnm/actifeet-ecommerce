import { Link } from 'react-router-dom'
import './CustomBtn.scss'

const CustomBtn = ({ route,btnStlye, btnType, text, handleClick }) => {
  return (
    <button 
      className={`customBtn ${btnStlye}`} 
      onClick={handleClick}
      type={btnType}
    >
        {
          route
          ? (
            <Link to={route}>
              {text}
            </Link>
          )
          : (<span>{text}</span>)
        }
    </button>
  )
}

export default CustomBtn