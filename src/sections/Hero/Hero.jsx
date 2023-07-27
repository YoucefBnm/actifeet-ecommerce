import { HeroImage } from '../../assets'
import { CustomBtn, TextAnimated } from '../../components'
import { motion } from 'framer-motion'
import './Hero.scss'
import { textAnimationVariants } from '../../utils/motion/motion.utils'

const Hero = () => {

  return (
    <section className="hero">
        <div className="hero__bg">
            <img className='width--100 height--100' src={HeroImage} alt='man & woman in athletic shoes' />
        </div>
        
        <div className="hero__text">
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

            <motion.div 
                className="hero__btns d--flex gap--2 mar--t-3"
                variants={textAnimationVariants}
            >
                <CustomBtn
                    route='/shop/men'
                    btnType='button'
                    text='shop men'
                    btnStlye='customBtn__bg customBtn__bg--light'
                />
                <CustomBtn
                    route='/shop/women'
                    btnType='button'
                    text='shop women'
                    btnStlye='customBtn__bg customBtn__bg--light'
                />
        </motion.div>
           </TextAnimated>
        </div>

        
    </section>
  )
}

export default Hero