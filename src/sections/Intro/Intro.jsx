import { motion } from "framer-motion"
import { CustomBtn, TextAnimated } from "../../components"
import { textAnimationVariants } from "../../utils/motion/motion.utils"

import './Intro.scss'

const Intro = () => {
  return (
    <section className="intro pad--y-default d--flex  d--justify-center">
        <div className="intro__col width--50 text--center">
           
            <TextAnimated>
                <motion.h1
                    className="heading heading--lg"
                    variants={textAnimationVariants}
                >
                    where adventure
                </motion.h1>
                <motion.h1
                    className="heading heading--lg mar--b-2"
                    variants={textAnimationVariants}
                >
                    meets performance
                </motion.h1>
            </TextAnimated>

            <TextAnimated>
                <motion.p
                    variants={textAnimationVariants}
                >
                    Discover a wide range of athletic shoes for your all activities, 
                    designed to elevate your athletic journey. whether you're hitting the trails, scaling new heights, or pushing your limits in
                    the gym, we have the perfect footwear to fuel your passion, 
                    Explore our collectons and find the ideal shoes to unlock your full potential
                </motion.p>

                <CustomBtn
                    route='/shop/all_products'
                    btnType='button'
                    text='shop now'
                    btnStlye='customBtn customBtn--bg customBtn--bg--primary mar--t-2'
                />
            </TextAnimated>
                
        </div>
    </section>
  )
}

export default Intro