import { Link } from 'react-router-dom'

const CustomBtn = ({ route,btnStlye, text, handleClick }) => {
  return (
    <div className={`customBtn customBtn--${btnStlye} cursor--pointer`} onClick={handleClick}>
        <Link to={route}>
            {text}
        </Link>
    </div>
  )
}

export default CustomBtn