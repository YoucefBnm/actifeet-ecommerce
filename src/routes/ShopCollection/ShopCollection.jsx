import { useSelector } from 'react-redux'
import { selectCollection } from '../../store/shopCollection/shopCollection.selector'
import { ShopContainer, ShopNav, ShopSearch, ShopSort } from '../../components/'
import { addShopCollection } from '../../hooks/addShopCollection'
import { fetchShopCollection } from '../../hooks/fetchShopCollection'
import './ShopCollection.scss'

const ShopCollection = () => {
    const shopCollection = useSelector(selectCollection)

    // addShopCollection()

    fetchShopCollection()

    const itemsPerPage = 12
    const totalPages = shopCollection['collection']['products'] && (Math.ceil(shopCollection['collection']['products'].length / itemsPerPage))

    console.log(totalPages)
  return (
    <main className="shop pad--x-default pad--y-default">
        <div className="shop__container">
            {
                shopCollection['collection'] && (
                    <>
                        <ShopNav shopFilters={shopCollection['collection']['filters']} />
                            
                        <div className="shop__wrap">
                            <ShopSearch />
                            <ShopSort />

                            <ShopContainer products={shopCollection['collection']['products']} />
                        </div>
                    </>
                )
            }

        </div>
    </main>
  )
}

export default ShopCollection