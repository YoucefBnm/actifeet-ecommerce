import { HeroImage } from '../../assets'
import { Link } from 'react-router-dom'
import { CustomCursor, TextAnimated } from '../'
import { motion } from 'framer-motion'
import './Hero.scss'
import { textAnimationVariants } from '../../utils/motion/motion.utils'

const Hero = () => {
  return (
    <section className="hero">

        <CustomCursor>
            <Link 
                to='/shop/all_products' 
                className='nav-link color--light width--100 height--100 d--flex d--justify-center d--align-center'
            >
                Shop
            </Link>
        </CustomCursor>
        <div className="hero__bg">
            <img className='width--100 height--100' src={HeroImage} alt='man & woman in athletic shoes' />
        </div>
        
        <div className="hero__text">
            {/* <h1 className="heading heading--lg color--light">step into greatness unleash your potential</h1> */}
           <TextAnimated>
            <motion.h1
                variants={textAnimationVariants}
                className='heading heading--lg color--light'
            >
                step into greatness
            </motion.h1>

            <motion.h1
                variants={textAnimationVariants}
                className='heading heading--lg color--light'
            >
                unleash your potential
            </motion.h1>
           </TextAnimated>
        </div>
    </section>
  )
}

export default Hero