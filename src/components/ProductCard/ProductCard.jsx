import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { fadeEffect } from '../../utils/motion/motion.utils'
import './ProductCard.scss'

const ProductCard = ({ product }) => {
    const { gender, category, brand, name, price, badges, discount, colors } = product

    const [activeColor, setActiveColor] = useState(0)
    const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="productCard height--100 d--flex d--flex-col">
        
        <div className="productCard__header">
            <div className="productCard__badges d--flex d--flex-col">
                {
                    badges && (
                        badges.map((badge, index) => (
                            <div key={index} className={`badge badge--${badge}`}>
                                <span>{badge}</span>
                            </div>
                        ))
                    )
                }
            </div>
            <div className="productCard__images">
                {
                    colors.map((productColor,index) => (
                        <div 
                            onMouseLeave={() => setActiveImage(0)}
                            onMouseEnter={() => setActiveImage(1)}
                            style={ index===activeColor ? { opacity: 1 } : { opacity: 0}}
                            className="productCard__images-wrap"
                            key={productColor.id}
                        >
                            <motion.img
                                variants={fadeEffect}
                                animate={
                                    activeImage===0 && activeColor===index 
                                    ? 'visible' 
                                    : 'hidden'
                                }
                                className="productCard__img productCard__img--main"
                                src={productColor.images[0]}
                                alt={name}
                            />
                            <motion.img
                                variants={fadeEffect}
                                animate={
                                    activeImage===1 && activeColor===index
                                    ? 'visible'
                                    : 'hidden'
                                }
                                className="productCard__img productCard__img--preview"
                                src={productColor.images[1]}
                                alt={name}
                            />
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="productCard__body">
            <LayoutGroup>
                <div className="productCard__colors">
                    {
                        colors.map((productColor, index) => (
                            <div 
                                key={productColor.id}
                                className="productCard__color"
                                onMouseEnter={() => setActiveColor(index)}
                            >
                                {
                                    index===activeColor
                                    && (
                                        <motion.div
                                            layoutId="productCard__color--outline"
                                            className="productCard__color productCard__color--outline"
                                            animate={{ borderColor: '#000' }}
                                            transition={{ type: 'spring', stiffness: 500, damping: 50 }}
                                        />
                                    )
                                }
                                <div 
                                    className="productCard__color productCard__color--bg"
                                    style={{ backgroundColor: productColor.color}}
                                />
                            </div>
                        ))
                    }
                </div>
            </LayoutGroup>

            <div className="productCard__details">
                <h3 className="heading heading--xs">{brand.toUpperCase()}</h3>
                <p>{gender} {category}</p>

                <div className="productCard__price">
                    {
                        discount
                        ? (
                            <>
                                <span className="productCard__priceFinal">${Math.round(price - ((price * (discount / 100)) * 100) / 100).toFixed(2)}</span>
                                <span id="oldPrice">${(Math.round(price * 100) / 100).toFixed(2)}</span>
                                <span className="badge badge--discount" id="discount">-{discount}%</span>
                            </>
                        )
                        : <span>${(Math.round(price * 100) / 100).toFixed(2)}</span>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard