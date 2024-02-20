import { Button } from "@/libs/shadcn/ui/button"
import { ProductDetailPageColorsProps, ProductDetailPageHeaderProps, ProductPageSizesProps, ProductPageDescriptionProps, ProductPageDetailsProps } from "./types"
import { Badge } from "@/libs/shadcn/ui/badge"
import { formatPrice, setPrice } from "@/utils/price/price.utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, selectLoading } from "@/store/cart/cart.selector"
import { setCartItemsStart } from "@/store/cart/cart.action"
import { Spinner } from "@/components"


const ProductDetailsHeader = (props: ProductDetailPageHeaderProps) => {

    const { badge, discount, name, price } = props

    return (
        <div className="flex self-stretch flex-col gap-1">
            {badge && <Badge variant={'secondary'} className="self-start">{badge}</Badge>}

            <div className="flex justify-between items-center gap-4 mb-8">
                <div className="flex flex-col gap-1">
                    {discount && <Badge className="self-start" variant={'destructive'}>{discount}% off</Badge>}
                    <h3 className=" font-heading capitalize text-xl">{name}</h3>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                {
                    discount
                    ? <>
                        <span className=" line-through font-normal text-neutral-500">${formatPrice(price)}</span>
                        <span className="font-semibold">${setPrice(price, discount)}</span>
                    </>
                    : <span className="font-semibold">${formatPrice(price)}</span>
                }
            </div>
        </div>
    )
}

const ProductPageColors = (props:ProductDetailPageColorsProps) => {

    const { colors, activeColor, handleMouseEnter} = props

    return (
        <div className="flex flex-col gap-2">
            <h3 className=" text-xl text-neutral-600 capitalize font-semibold">select color</h3>
            <div className="flex gap-1 flex-wrap" id="product-page-details-colors">
                {
                    colors.map((color, index) => 
                        <button
                            key={color.id}
                            aria-label="show color"
                            role="button"
                            onMouseEnter={() => handleMouseEnter(index)}
                            className="relative flex items-center justify-center w-14 h-10 border-neutral-200 rounded-sm p-1"
                        >
                            <img className="align-middle object-contain max-h-full" src={color.imagesUrls[0]} alt="athletic shoes" />
                            {index===activeColor
                                && <motion.span className="absolute inset-0 border border-neutral-300 shadow-sm" layoutId="product-page-details-colors" />
                            }
                        </button>
                    )
                }
            </div>
        </div>
    )
}

const ProductPageSizes = (props:ProductPageSizesProps) => {

    const { sizes, selectedSize, setSelectedSize } = props
    // todo cart error

    return (
        <div className="flex flex-col gap-2">
            <h3 className={
                `text-xl text-neutral-600 capitalize font-semibold`
                }
            >select size</h3>

            <div className="flex gap-1 flex-wrap" id="product-page-details-sizes">
                {
                    sizes.map((size,index) => (
                        <button
                            key={`${size}-${index}`}
                            role="button"
                            aria-label="select size"
                            className={`
                                ${size===selectedSize ? 'text-inherit font-semibold' : 'text-neutral-500 font-normal'}
                                relative appearance-none border w-10 h-10 border-neutral-500
                            `}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size===selectedSize
                                && <motion.div className="absolute inset-0 border border-neutral-800 shadow-sm" layoutId="product-page-details-sizes" />
                            }
                            <span className="text-sm">{size}</span>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export const ProductDescriptions = ({details}:ProductPageDescriptionProps) => {
    return (

        <div className="flex flex-col gap-2">
            <h3 className=" text-xl text-neutral-600 capitalize font-semibold">Product Details</h3>

            <ul className="flex flex-col gap-1 items-start">
                {
                    details.map((detail, index) => (
                        <li key={index} className="relative pl-3">
                            <span className="absolute left-0 text-xs top-px text-neutral-300">&raquo;</span>
                            <p className="text-sm">{detail}</p>
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
}

const ProductPagedetails = (props:ProductPageDetailsProps) => {

    const { product, activeColor, handleColorChange } = props
    const [selectedSize, setSelectedSize] = useState<number | undefined>()

    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const isLoading = useSelector(selectLoading)
    const addItemToCart = () => dispatch(setCartItemsStart(cartItems, product, activeColor, selectedSize))

    return (
        <div className="flex flex-col relative items-start gap-8">
            <ProductDetailsHeader 
                name={product.name}
                price={product.price}
                discount={product.discount}
                badge={product.badge}
            />

            <ProductPageColors
                colors={product.images}
                activeColor={activeColor}
                handleMouseEnter={handleColorChange}
            />

            <ProductPageSizes
                sizes={product.sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
            />

            <ProductDescriptions details={product.details} />

            <Button onClick={addItemToCart} className="self-stretch font-semibold" size={'lg'}>
                {isLoading ? <div className=" inline-flex gap-2 items-center"><Spinner /> <span>Adding</span></div> : 'Add to Cart'}
            </Button>
        </div>
    )
}

export default ProductPagedetails