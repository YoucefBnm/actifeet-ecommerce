import { Link } from 'react-router-dom'

const CustomBtn = ({ route,btnStlye, btnType, text, handleClick }) => {
  return (
    <button 
      className={`customBtn customBtn--${btnStlye} cursor--pointer`} 
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