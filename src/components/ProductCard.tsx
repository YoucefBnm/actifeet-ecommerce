import { AnimatePresence, motion } from "framer-motion"
import { ProductCardProps, ProductColorsProps, ProductDetailsProps, ProductImagesProps, ProductPriceProps } from "./types"
import { Link } from "react-router-dom"
import { useSetActiveImage } from "@/hooks/useSetActiveImage"
import { Badge } from "@/libs/shadcn/ui/badge"
import { formatPrice, setPrice } from "@/utils/price/price.utils"

const ProductColors = (props:ProductColorsProps) => {

  const { productId, productColors, activeColor, setActiveColor } = props

  return (
    <div className="flex gap-2 px-4">
      {
        productColors.map((productColor, index) =>
          <button 
            key={`${productColor}-${index}`}
            role='button'
            className=" appearance-none rounded-full w-3.5 h-3.5 shadow-inner border border-neutral-200 relative"
            aria-label="show color image"
            style={{ backgroundColor: productColor }}
            onMouseEnter={() => setActiveColor(index)}
          >
            {
              index===activeColor
              && (
                <motion.div 
                  layoutId={productId}
                  className=" border-2 border-neutral-500 w-5 h-5 rounded-full absolute -top-1 -left-1"
                  transition={{ type: 'spring', stiffness: 500, damping: 50}}
                />
              )
            }
          </button>
        )
      }
    </div>
  )
}

const ProductCardImages = (props:ProductImagesProps) => {

  const { productImages, activeColor, activeImage ,handleMouse } = props
  return (
    <div className="h-full flex flex-1 justify-center items-start relative w-full overflow-hidden">
      {
        productImages.map((productImage, index) =>
          <motion.div
            animate={index===activeColor ? { opacity: 1 } : { opacity: 0}}
            key={productImage.id}
            onMouseEnter={() => handleMouse('enter')}
            onMouseLeave={() => handleMouse('leave')}
            className="absolute inset-0 text-center overflow-hidden"
          >
            <div className="p-4 pb-4 w-full h-full float-start bg-cover bg-center">
              <div className={`relative w-full h-full flex items-center ${index===activeColor ? 'opacity-100' : 'opacity-0'}`}>
                <AnimatePresence>
                  <motion.img
                    key={0}
                    loading="lazy"
                    alt="sport shoes"
                    animate={activeImage===0 ? {opacity: 1} : {opacity: 0}}
                    className="object-contain absolute bottom-0 max-h-[80%] mt-auto max-w-[85%] bg-center left-1/2 -translate-x-1/2"
                    src={productImage.imagesUrls[0]}
                    exit={{ opacity: 0}}
                  />
                  <motion.img
                    key={1}
                    loading="lazy"
                    animate={activeImage===1 ? {opacity: 1} : {opacity: 0}}
                    className="object-contain absolute bottom-0 max-h-[80%] mt-auto max-w-[85%] bg-center left-1/2 -translate-x-1/2"
                    src={productImage.imagesUrls[1]}
                    exit={{ opacity: 0}}
                    alt="sport shoes"
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )
      }
    </div>
  )
}

const ProductDetails = (props:ProductDetailsProps) => {

  const { productName, productBrand, productGender, productCategory } = props

  return (
    <div className="flex flex-col px-4 max-w-full">
      <h4 className="text-base font-semibold capitalize text-ellipsis truncate" title={productName}>{productName}</h4>
      <h5 className="text-xs text-neutral-500 capitalize font-normal">
        {productGender} {productCategory} {productBrand}
      </h5>
    </div>
  )
}

const ProductPrice = (props:ProductPriceProps) => {

  const { price, discount } = props

  return (
    <div className="flex px-4 text-sm justify-between items-end">
      {
        discount
        ? (
          <>
            <div className="flex items-end gap-2 w-full">
              <p className="font-semibold">${setPrice(price, discount)}</p>
              <p className=" line-through text-neutral-500 font-normal">${setPrice(price, null)}</p>
              <Badge variant={'destructive'} className="rounded-sm ml-auto px-0.5 py-0 leading-none font-normal text-xs">-{discount}%</Badge>
            </div>
          </>
        )
        : <p className="font-semibold">${formatPrice(price)}</p>
      }
    </div>
  )
}
const ProductCard = ({product}:ProductCardProps) => {

  const { activeColor, activeImage, handleColorChange, handleMouse } = useSetActiveImage()

  return (
    <Link aria-label={product.name} title={product.name} to={`/${product.id}`} className="relative bg-white flex flex-col gap-2 pb-2">

      {/* top */}
      <div className="overflow-hidden bg-white h-48 w-full relative flex flex-col items-start justify-between">
        {/* overlay */}
        <div className="w-full h-full bg-neutral-950 opacity-5 rounded-md absolute inset-0 z-10 pointer-events-none" />
        <div className="flex items-start h-5">
          {
            product.badge
            && <Badge variant={'secondary'} className="shadow-none rounded-sm text-xs" key={`${product.id}-${product.badge}`}>{product.badge}</Badge>
          }
        </div>

        <ProductCardImages
          productImages={product.images}
          activeColor={activeColor}
          activeImage={activeImage}
          handleMouse={handleMouse}
        />
      </div>
      <ProductColors
          productId={product.id}
          productColors={product.colors}
          activeColor={activeColor}
          setActiveColor={handleColorChange}
        />

        <ProductDetails
          productName={product.name}
          productGender={product.gender}
          productCategory={product.category}
          productBrand={product.brand}
        />

        <ProductPrice price={product.price} discount={product.discount} />
    </Link>
  )
}

export default ProductCard