import ProductCard from '../ProductCard/ProductCard'
import './ShopContainer.scss'

const ShopContainer = ({ products }) => {
  return (
    <div className="shopContainer">
        {
            products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))
        }
    </div>
  )
}

export default ShopContainer