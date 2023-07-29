import { Link } from 'react-router-dom'
import './CategoryItem.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'

const CategoryItem = ({ item }) => {
  const [isHovred, setIsHovred] = useState(false)

  const handleMouseIn = () => setIsHovred(true)
  const handleMouseOut = () => setIsHovred(false)

  return (
    <Link 
      to={item.route} 
      className="category"
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
        <motion.div 
          className="category__img"
          animate={isHovred ? { scale: 1.1 } : { scale: 1}}
        >
            <img className='' src={item.image} alt='workout shoes' />
        </motion.div>
        <motion.div 
          className="category__overlay" 
          animate={ isHovred ? { backgroundColor: 'rgba(0,0,0,.4)' } : { backgroundColor: 'rgba(0,0,0,.2)' } }
        />
        <h2 className="heading heading--sm">{item.title}</h2>
    </Link>
  )
}

export default CategoryItem