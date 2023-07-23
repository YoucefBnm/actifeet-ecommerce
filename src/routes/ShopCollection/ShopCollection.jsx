import { ShopSearch, ShopSort } from '../../components'
import './ShopCollection.scss'

const ShopCollection = () => {
    
  return (
   <ShopCollectionProvider>
     <main className="shop pad--x-default pad--y-default">
        <div className="shop__container">
            <div className="shop__nav">
                shop nav 
            </div>

            <div className="shop__wrap">
                <div className="shop__utils">
                    <ShopSearch />
                    <ShopSort />
                </div>

                <div className="shop__products">
                    shop products
                </div>

            </div>
        </div>
    </main>
   </ShopCollectionProvider>
  )
}

export default ShopCollection