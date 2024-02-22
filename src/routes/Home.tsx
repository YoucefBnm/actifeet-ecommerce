import { HeroContent, ctaClimbingContent, ctaCrossTrainingContent, heroHikingContent, heroRunningContent } from "@/constants/data"
import { Categories, Cta, Hero } from "@/layouts"
import { fadeVariants } from "@/libs/motion/motion.variatns"
import { Button } from "@/libs/shadcn/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ProductsCarousel } from "@/components"

const Home = () => {
  
  return (
    <>
      <Hero 
        bg="bg-hero"
        heading={HeroContent.heading}
        paragraph={HeroContent.paragraph}
      >
        <motion.div variants={fadeVariants('bottom')} className="flex gap-4 overflow-hidden">
          <Button size={'lg'} variant={'secondary'} className="rounded-full font-semibold" asChild>
            <Link to={'/shop/men'}>Shop Men</Link>
          </Button>
          <Button size={'lg'} variant={'secondary'} className="rounded-full font-semibold" asChild>
            <Link to={'/shop/women'}>Shop Women</Link>
          </Button>
        </motion.div>
      </Hero>
      
      <Categories />
      
      <Hero
        bg='bg-hero-running'
        heading={heroRunningContent.heading}
        paragraph={heroRunningContent.paragraph}
      >
        <motion.div variants={fadeVariants('bottom')} className="flex gap-4 overflow-hidden">
          <Button size={'lg'} variant={'secondary'} className="rounded-full font-semibold" asChild>
            <Link to={'/shop/men/category/running'}>Shop Men</Link>
          </Button>
          <Button size={'lg'} variant={'secondary'} className="rounded-full font-semibold" asChild>
            <Link to={'/shop/women/category/running'}>Shop Women</Link>
          </Button>
        </motion.div>
      </Hero>
      
      <ProductsCarousel title="Crowds Favorites" link="/shop/badge/best seller" params={{badge: 'best seller'}} />

      <Cta 
        heading={ctaClimbingContent.heading}
        paragraph={ctaClimbingContent.paragraph}
        imageUrl={ctaClimbingContent.imageUrl}
        route={ctaClimbingContent.route}
      />

      <ProductsCarousel title="New Arrivals" link="/shop/badge/new" params={{badge: 'new'}} />

      <Hero 
        bg="bg-hero-hiking"
        heading={heroHikingContent.heading}
        paragraph={heroHikingContent.paragraph}
      >
        <motion.div variants={fadeVariants('bottom')} className="flex gap-4 overflow-hidden">
          <Button size={'lg'} variant={'secondary'} className="rounded-full font-semibold" asChild>
            <Link to={'/shop/men/category/hiking'}>Shop Men</Link>
          </Button>
          <Button size={'lg'} variant={'secondary'} className="rounded-full font-semibold" asChild>
            <Link to={'/shop/women/category/hiking'}>Shop Women</Link>
          </Button>
        </motion.div>
      </Hero>

      <ProductsCarousel title="Best Deals" link="/shop/badge/sale" params={{badge: 'sale'}} />

      <Cta
        heading={ctaCrossTrainingContent.heading}
        paragraph={ctaCrossTrainingContent.paragrpah}
        imageUrl={ctaCrossTrainingContent.imageUrl}
        route={ctaCrossTrainingContent.route}
      />
    </>
  )
}

export default Home