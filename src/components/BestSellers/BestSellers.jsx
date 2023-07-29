import React from 'react'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import { SHOP_COLLECTIONS } from '../../assets/shop_data'
import ProductCard from '../ProductCard/ProductCard'
import { carouselProductsSettings } from '../../utils/swiper/swiper.config'
import './BestSellers.scss'

const BestSellers = () => {
  return (
    <section className="homeProducts">
        <CarouselContainer
            heading='crowds favorites'
            paragraph='discover our most sold footwear and most demanded.'
            route='/shop/best_seller'
            items={SHOP_COLLECTIONS[15].products}
            Item={ProductCard}
            swiperSettings={carouselProductsSettings}
        />
    </section>
  )
}

export default BestSellers