import { motion } from "framer-motion"
import { CategoryCardProps } from "./types"
import { Link } from "react-router-dom"
import { fadeVariants } from "@/libs/motion/motion.variatns"
import { StaggerContainer } from "@/components"
import { ScrollArea, ScrollBar } from "@/libs/shadcn/ui/scroll-area"
import { categories } from "@/constants/data"

const CategoryCard = (props:CategoryCardProps) => {

  const MotionLink = motion(Link)

  return (
    <StaggerContainer style="overflow-hidden rounded-md w-[266px] h-[346px] ">
      <MotionLink variants={fadeVariants(null)} to={props.link} className="w-full h-full flex flex-1 items-end pl-5 pb-5 relative overflow-hidden">
        <h4 className="font-heading z-10 uppercase text-3xl text-white pointer-events-none">{props.title}</h4>
        <motion.img width={360} height={495} whileHover={{ scale: 1.1}}  className="align-middle inset-0 absolute" src={props.imageUrl} alt={props.title} />
      </MotionLink>
    </StaggerContainer>
  )
}

const Categories = () => {
  return (
    <section id="categories">
      <StaggerContainer style="py-8 flex flex-col gap-8">
        <div className="pl-default">
          <motion.h2 className="uppercase font-heading text-4xl" variants={fadeVariants('top')}>
            shop by sport
          </motion.h2>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-none border-none px-default">
          <div className="flex flex-1 gap-6 mb-4">
            {
              categories.map(category => 
                <CategoryCard  
                  key={category.id}
                  title={category.title}
                  imageUrl={category.image}
                  link={category.link}
                />
              )
            }
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </StaggerContainer>
    </section>
  )
}

export default Categories