import { useParams } from 'react-router-dom'
import { ShopSearch, ShopSort } from '../../components'
import './ShopCollection.scss'

const ShopCollection = () => {
    const { collection, subCollection } = useParams()
    
  return (
   <main className="shop">
    {collection}
    {subCollection}
   </main>
  )
}

export default ShopCollection