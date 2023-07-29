import { Categories, Hero, Intro } from '../../sections'
import { SHOP_COLLECTIONS } from '../../assets/shop_data'
import { BestSellers } from '../../components'

const Home = () => {
  const products = SHOP_COLLECTIONS[15]['products']
  return (
    <>
      <Hero />
      <Categories />
      <Intro />
      <BestSellers />
    </>
  )
}

export default Home