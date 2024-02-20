import { motion } from "framer-motion";
import { StaggerContainerProps } from "./types";
import { useScrollReveal } from "@/libs/motion/motion.scroll";

const StaggerContainer = ({style,direction, children}:StaggerContainerProps) => {

  const { targetRef, isInView} = useScrollReveal()

  return (
    <motion.div
      className={style}
      transition={{staggerChildren: .3, staggerDirection: direction}}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
      <div ref={targetRef} />

    </motion.div>
  )
}

export default StaggerContainer