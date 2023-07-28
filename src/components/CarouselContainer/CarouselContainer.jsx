import ProductCard from "../ProductCard/ProductCard"
import { Swiper, SwiperSlide} from "swiper/react"
import { motion } from "framer-motion"
import TextAnimated from "../TextAnimated/TextAnimated"
import { textAnimationVariants } from "../../utils/motion/motion.utils"
import CustomBtn from "../CustomBtn/CustomBtn"
import { IconChevronLeft, IconChevronRight } from "../../assets"
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import './CarouselContainer.scss'

const CarouselContainer = ( { items,heading, paragraph, route, swiperSettings, modules }) => {

    return (
        <section className="carousel d--flex gap--4 pad--y-default">
            <div className="carousel__text">
                <TextAnimated>
                    <motion.h2 variants={textAnimationVariants} className="heading heading--md mar--b-2">{heading}</motion.h2>
                    <motion.p variants={textAnimationVariants} className='mar--b-1'>{paragraph}</motion.p>
                    <motion.div variants={textAnimationVariants} >
                    <CustomBtn
                        btnStlye='customBtn__link customBtn__link--primary mar--b-4'
                        route={route}
                        text='Shop Collection'
                    />
                    </motion.div>
                </TextAnimated>

                <div className="carousel__control d--flex gap--1">
                    <button className="carousel__btn carousel__btn--prev">
                        <IconChevronLeft />
                    </button>
                    <button className="carousel__btn carousel__btn--next">
                        <IconChevronRight />
                    </button>
                </div>
            </div>
            <Swiper 
                className='mySwiper'
                modules={modules}
                navigation={{
                    nextEl: '.carousel__btn--next',
                    prevEl: '.carousel__btn--prev'
                }}
                {...swiperSettings}
                
            >
                {
                    items.map(item => (
                        <SwiperSlide key={item.id} >
                            <ProductCard product={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default CarouselContainer