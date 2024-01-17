import { StaggerContainer } from "@/components"
import { HeroContent } from "@/constants/data"
import { fadeVariants } from "@/libs/motion/motion.variants"
import { Button } from "@/libs/shadcn/ui/button"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { heading, paragraph} = HeroContent
const splitHeading = heading.split(' ')

const Hero = () => {
  const MotionButton = motion(Button)
  return (
    <section className="w-full bg-hero min-h-svh bg-cover bg-no-repeat px-default flex items-end">
      <StaggerContainer direction={-1} style="h-[450px] flex flex-col items-start justify-between mb-12">
        <motion.p
          variants={fadeVariants('right')}
          className="text-white w-[55ch] mb-6"
        >
          {paragraph}
        </motion.p>

        <StaggerContainer direction={-1} style="flex gap-x-6">
          <MotionButton variant={"secondary"} variants={fadeVariants('right')}>
            <Link to='/shop/men'>Shop Men</Link>
          </MotionButton>
          <MotionButton variant={"secondary"} variants={fadeVariants('right')}>
            <Link to='/shop/women'>Shop Women</Link>
          </MotionButton>
        </StaggerContainer>

        <StaggerContainer style="overflow-hidden mt-auto">
          {
            splitHeading.map((heading, index) => (
              <motion.span 
                key={`${heading}-${index}`}
                className="inline-block last-of-type:mr-0 mr-5 heading heading-xl text-white"
                variants={fadeVariants('bottom')}
              >
                {heading}
              </motion.span>
            ))
          }
        </StaggerContainer>
      </StaggerContainer>
    </section>
  )
}

export default Hero