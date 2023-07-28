import { CarouselContainer } from '../../components'
import { Hero, Intro } from '../../sections'
import { SHOP_COLLECTIONS } from '../../assets/shop_data'
import { carouselProductsSettings } from '../../utils/swiper/swiper.config'
import { Keyboard, Mousewheel, Navigation, Scrollbar } from 'swiper/modules'

const Home = () => {
  const products = SHOP_COLLECTIONS[15]['products']
  return (
    <>
      <Hero />
      <Intro />
      <CarouselContainer 
        items={products}
        heading='crowds favorites'
        paragraph='Discover our most popular shoes.'
        route='/shop/best_seller'
        swiperSettings={carouselProductsSettings}
        modules={[Keyboard, Scrollbar, Navigation, Mousewheel]}
      />
    </>
  )
}

export default Home