import { CarouselContainer, CategoryItem } from '../../components'
import { categoriesItems } from '../../constants'
import { carouselCategoriesSettings } from '../../utils/swiper/swiper.config'
import './Categories.scss'

const Categories = () => {
  return (
    <section className="categories">
        <CarouselContainer
          heading='every step counts'
          paragraph='Made for every challenge, Our main focus is to support your in achieving your athletic goals, with our exceptional range of footwear designed to deliver unparalleled performance, comfort, and style.'
          items={categoriesItems}
          Item={CategoryItem}
          swiperSettings={carouselCategoriesSettings}
        />
    </section>
  )
}

export default Categories