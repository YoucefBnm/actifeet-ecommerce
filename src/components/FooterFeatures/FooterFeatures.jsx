import { footerFeturesContent } from '../../constants'
import { motion } from 'framer-motion'

import './FooterFeatures.scss'
import TextAnimated from '../TextAnimated/TextAnimated'
import { textAnimationVariants } from '../../utils/motion/motion.utils'

const FooterFeatures = () => {
  return (
    <div className="features bg--primary">

        <TextAnimated>
            <div className='d--flex d--justify-center pad--y-default pad--x-default gap--6 d--flex-wrap'>
                {
                    footerFeturesContent.map(feature => (
                        <motion.div 
                            variants={textAnimationVariants}
                            className="features__card d--flex d--align-center gap--3"
                            key={feature.id}
                        >
                            <div className="features__card-icon">
                                <img src={feature.icon} alt='icon' />
                            </div>

                            <div className="features__card-text d--flex d--flex-col color--light gap--1">
                                <h4 className="heading heading--xs">{feature.heading}</h4>
                                <p>{feature.text}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </TextAnimated>

    </div>
  )
}

export default FooterFeatures