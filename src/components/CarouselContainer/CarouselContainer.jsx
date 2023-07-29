import { Swiper, SwiperSlide, useSwiper} from "swiper/react"
import { motion } from "framer-motion"
import TextAnimated from "../TextAnimated/TextAnimated"
import { textAnimationVariants } from "../../utils/motion/motion.utils"
import CustomBtn from "../CustomBtn/CustomBtn"
import { IconChevronLeft, IconChevronRight } from "../../assets"
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import './CarouselContainer.scss'
import { Keyboard, Mousewheel, Navigation, Scrollbar } from "swiper/modules"
import { useCallback, useRef, useState } from "react"

const CarouselContainer = ( { heading, paragraph, route, items, Item, swiperSettings }) => {
    const sliderRef = useRef(null)

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    
    // const [_, setInit] = useState();

    const handleNext = useCallback(() => {
        if(!sliderRef.current) return
        sliderRef.current.swiper.slideNext()
    })


    const handlePrev = useCallback(() => {
        if(!sliderRef.current) return
        sliderRef.current.swiper.slidePrev()
    })
    return (
        <div className="carousel d--flex gap--4 pad--y-default">
            <div className="carousel__text d--flex d--flex-col gap--4">
                <TextAnimated>
                    <motion.h2 
                        className="heading heading--md mar--b-2"
                        variants={textAnimationVariants}
                    >
                        {heading}
                    </motion.h2>
                    <motion.p 
                        variants={textAnimationVariants}
                    >
                        {paragraph}
                    </motion.p>
                    {
                        route &&(
                            <motion.div variants={textAnimationVariants}>
                                <CustomBtn
                                    btnStlye='customBtn customBtn__link customBtn__link--primary'
                                    text='shop collection'
                                    route={route}
                                    btnType='button'
                                />
                            </motion.div>
                        )
                    }
                </TextAnimated>
                
                <div className="carousel__btns d--flex gap--1">
                    <button 
                        className="carousel__btn carousel__btn--prev"
                        ref={navigationPrevRef}
                        onClick={handlePrev}
                    >
                        <span><IconChevronLeft /></span>
                    </button>
                    <button 
                        className="carousel__btn carousel__btn--prev"
                        ref={navigationNextRef}
                        onClick={handleNext}
                    >
                        <span><IconChevronRight /></span>
                    </button>
                </div>

            </div>
            <Swiper 
                ref={sliderRef}
                modules={[Keyboard, Scrollbar, Navigation, Mousewheel]}
                navigation={{
                    prevEl: navigationNextRef.current,
                    nextEl: navigationNextRef.current
                }}
                onBeforeInit={(swiper) => {
                    swiper.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.prevEl = navigationPrevRef.current;
                }}
          
                // onInit={() => setInit(true)}
                {...swiperSettings}
            >
                {
                    items.map(item => (
                        <SwiperSlide key={item.id} >
                            <Item item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default CarouselContainer