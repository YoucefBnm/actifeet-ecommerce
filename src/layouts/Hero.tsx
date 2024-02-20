import { AnimatedHeading, StaggerContainer } from "@/components"
import { HeroProps } from "./types"
import { motion } from "framer-motion"
import { fadeVariants } from "@/libs/motion/motion.variatns"

const Hero = ({ bg, heading, paragraph, children}:HeroProps) => {
  
  return (
    <section className={`${bg} min-h-svh h-[690px] bg-no-repeat bg-cover text-white`}>
      <StaggerContainer style="h-full max-h-dvh py-8 pl-default h-full pl-default flex flex-col items-start justify-center space-y-5">
          <AnimatedHeading size="text-4xl" heading={heading} />
          <motion.p className="max-w-[60ch] leading-normal text-sm" variants={fadeVariants('bottom')}>{paragraph}</motion.p>
          {children}
      </StaggerContainer>
    </section>
  )
}

export default Hero