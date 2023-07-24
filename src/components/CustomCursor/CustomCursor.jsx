import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { followMouse } from '../../utils/customCursor/customCursor.utils'

const CustomCursor = ({ children }) => {
    const [point, setPoint] = useState({
        x: 0,
        y: 0
      })
    
      const boxRef = useRef(null)
      const { x, y } = point
  return (
    <motion.div
      style={{ zIndex: 5 }}
      className="customCursor pos--absolute width--100 height--100"
      ref={boxRef}
      onMouseMove={(e) => setPoint(followMouse(e, boxRef))}
    >
      <motion.div 
        className="customCursor__inner bg--primary pos--absolute cursor--pointer d--flex d--justify-center d--align-center"
        style={{
          width: '10rem',
          height: '10rem',
          borderRadius: '50%'
        }}
        animate={{ x, y }}
        transition={{
          type: 'tween',
          duration: 0.1
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default CustomCursor