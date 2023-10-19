import { Link } from 'react-router-dom'
import './ProductCard.scss'
import { motion } from 'framer-motion'
import { useIsActive } from '../../hooks/useIsActive'
import { formatPrice, setProductPrice } from '../../utils/productPrice/productPrice'

const ProductCardBadges = ({ productId, badges }) => (
    <div className="productCard__badges flex gap--05">
        {
            badges.map(badge => (
                <div 
                    key={`${productId}-${badge}`}
                    className={`badge badge--${badge}`}
                >
                    <span>{badge}</span>
                </div>
            ))
        }
    </div>
) 

const ProductCard = ({ product }) => {
    
    const { activeColor, activeImage, handleColorChange, handleMouse } = useIsActive()

    // const {id, badges,category, name, brand, gender, price, discount, colors } = product

  return (
    <div className="productCard flex flex--col gap--2">
        <div className="productCard__top pos--relative flex flex--col gap--2 flex--justify-center">
            {product.badges && <ProductCardBadges productId={product.id} badges={product.badges} />}
            <div className="productCard__overlay" />
            <div className="productCard__images">
                {
                    product.colors.map((image, index) => (
                        <motion.div 
                            key={`${product.id}-${image.color}-${index}`}
                            onMouseEnter={() => handleMouse('enter')}
                            onMouseLeave={() => handleMouse('leave')}
                            animate={
                                index===activeColor
                                ? { opacity: 1 }
                                : { opacity: 0 }
                            }
                            className='productCard__images--wrap'
                        >
                            <div 
                                // to={`/product/${gender}/${id}`} 
                                className='block'
                            >
                                <motion.img 
                                    animate='visible'
                                    className='productCard__image'
                                    src={image.images[activeImage]}
                                    alt={`${name} ${image.color}`}
                                />
                            </div>
                        </motion.div>
                    ))
                }
            </div>

            
        </div>

        <div className="productCard__body flex flex--col gap--1">
            <div className="productCard__colors flex gap--1">
                {
                    product.colors.map((color, index) => (
                        <div 
                            key={color.id}
                            className='productCard__color'
                            onMouseEnter={() => handleColorChange(index)}
                        >
                            {
                                index === activeColor
                                && (
                                    <motion.div 
                                        layoutId={`productColor-outline-${product.id}`}
                                        className='productCard__color--outline'
                                        id={`productColor-outline-${product.id}`}
                                        style={{ borderColor: '#000' }}
                                        transition={{ type: "spring", stiffness: 500, damping: 50 }}
                                    />
                                )
                            }
                            <div className="productCard__color--bg" style={{ backgroundColor: color.color }} />
                        </div>
                    ))
                }
            </div>

            <div className="productCard__details">
                <h4 className="display display--4 text--cap">{product.brand}</h4>
                <h4 className="display display--title color--grey-light text--cap text--w-4">{product.gender} {product.category}</h4>
            </div>

            <div className="productCard__price">
                {
                    product.discount
                    ? (
                        <div className="flex gap--2 flex--align-center">
                            <p className="price price--final">
                                <span>${setProductPrice(product.discount, product.price)}</span>
                            </p>
                            <p className="price price--old">
                                <span>${formatPrice(product.price)}</span>
                            </p>
                            <div className="badge badge--discount">
                                <span>-{product.discount}%</span>
                            </div>
                        </div>
                    )
                    : (
                        <p className="price price--final">
                            <span>${product.price}</span>
                        </p>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ProductCard