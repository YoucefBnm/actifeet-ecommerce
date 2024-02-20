import { Spinner } from "@/components"
import { useFetchProductItem } from "@/hooks/useFetchProductItem"
import { useSetActiveImage } from "@/hooks/useSetActiveImage"
import { ProductPageGallery, ProductPagedetails } from "@/layouts"
import { Link } from "react-router-dom"

const ProductPage = () => {
    const { product } = useFetchProductItem()
    const {activeColor, handleColorChange } = useSetActiveImage()

  return (
    <main>
        {
            product 
            ? (
                <div className="grid gap-8 grid-rows-[repeat(2,min-content)] md:grid-rows-1 md:grid-cols-[.6fr_.4fr] px-default py-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-start gap-0.5 text-sm capitalize text-neutral-600">
                            <Link to={`/shop/${product.gender}`}>{product.gender}</Link>
                            <span>/</span>

                            <Link to={`/shop/category/${product.category}`}>{product.category}</Link>
                            <span>/</span>

                            <Link to={`/shop/brand/${product.brand}`}>{product.brand}</Link>
                        </div>

                        <ProductPageGallery productImages={product.images[activeColor].imagesUrls} />
                    </div>

                    <ProductPagedetails 
                        product={product}
                        activeColor={activeColor}
                        handleColorChange={handleColorChange}
                    />
                </div>
            ) : (
                <div className="w-screen h-dvh bg-neutral-100 flex justify-center items-center"><Spinner /></div>
            )
        }
    </main>
  )
}

export default ProductPage