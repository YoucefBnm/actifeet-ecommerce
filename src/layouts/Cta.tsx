import { AnimatedHeading, StaggerContainer } from "@/components"
import { CtaProps } from "./types"
import { motion } from "framer-motion"
import { fadeVariants, imageMaskVariants } from "@/libs/motion/motion.variatns"
import { Button } from "@/libs/shadcn/ui/button"
import { Link } from "react-router-dom"

const Cta = ({ heading, paragraph, route, imageUrl}:CtaProps) => {
  const MotionButton = motion(Button)
  return (
    <section>
      <StaggerContainer direction={-1} style="flex">
        <StaggerContainer direction={-1} style="flex w-1/2 flex-col px-default items-start justify-center gap-5">
          <AnimatedHeading size="text-4xl" heading={heading} />
          <motion.p className="max-w-[60ch] leading-normal text-sm" variants={fadeVariants('bottom')}>{paragraph}</motion.p>
          <MotionButton size={'lg'} className="rounded-full" variants={fadeVariants('bottom')}>
            <Link to={route}>Shop Collection</Link>
          </MotionButton>
        </StaggerContainer>

        <motion.div variants={imageMaskVariants} transition={{duration: .3, delay: .3}}>
          <img className=" align-middle" src={imageUrl} alt='workout' loading="lazy" />
        </motion.div>
      </StaggerContainer>
    </section>
  )
}

export default Cta