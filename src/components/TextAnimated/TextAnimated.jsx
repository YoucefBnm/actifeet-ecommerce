import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { textContainerVariants } from "../../utils/motion/motion.utils"

const TextAnimated = ({ children }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

  return (
    <motion.div
        className="d--inline-block overflow--hidden"
        ref={ref}
        variants={textContainerVariants}
        animate={inView ? 'visible' : 'hidden'}
    >
        {children}
    </motion.div>
  )
}

export default TextAnimated