import { motion } from "framer-motion"
import { StaggerContainer } from "."
import { AnimatedHeadingProps } from "./types"
import { fadeVariants } from "@/libs/motion/motion.variatns"

const AnimatedHeading = ({ heading, size }:AnimatedHeadingProps) => {

  const splitHeading = heading.split(' ')
  return (
    <StaggerContainer style='overflow-hidden font-heading uppercase'>
      {
        splitHeading.map((word, index) =>
          <motion.span 
            key={`${word}-${index}`}
            className={`inline-block last-of-type:mr-0 mr-3 ${size}`}
            variants={fadeVariants('bottom')}
          >
            {word}
          </motion.span>
        )
      }
    </StaggerContainer>
  )
}

export default AnimatedHeading