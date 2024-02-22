import { ProductCard, Spinner } from "@/components"
import { Button } from "@/libs/shadcn/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/libs/shadcn/ui/carousel"
import { Link } from "react-router-dom"
import { ProductProps, ProductsCarouselProps } from "./types"
import { useEffect, useState } from "react"
import { fetchProducts } from "@/firebase/products/fetchProducts"
import { useScrollReveal } from "@/libs/motion/motion.scroll"
import { fetchOptionsProps } from "@/firebase/types"

const ProductsCarousel = ({title, link, params}:ProductsCarouselProps) => {
    const [carouselProducts, setCarouselProducts] = useState<ProductProps[]>()
    const [loading, setLoading] = useState(false)

    const {targetRef, isInView } = useScrollReveal()
    useEffect(() => {

        const fetchCarouselProducts = async () => {
            // params, sortOption, limitNumber, filters, lastVisible
            setLoading(true)
            const options:fetchOptionsProps = {
                params: params,
                sortOption: 'suggested',
                limitNumber: 15,
                filters: {},
                lastVisible: undefined
            }
            const {products} = await fetchProducts(options)

            if(products && isInView) {
                setCarouselProducts(products)
                setLoading(false)
            }
        }
        
        fetchCarouselProducts()
        console.log(carouselProducts)
    }, [isInView])

    return (
        <section className="px-default py-12">
            <h3 ref={targetRef} className="font-heading mb-4 text-neutral-500 text-5xl">{title}</h3>
            <Carousel 
                opts={{
                    align: "start",
                    axis: 'x',
                    skipSnaps: true
                }}
                className="w-full"
            >
                <div className="flex justify-between items-baseline mb-2">
                    <div className="flex reltative gap-2">
                        <CarouselPrevious className="relative transform-none translate-x-0 top-0 left-0 right-0 translate-y-0" />
                        <CarouselNext className="relative transform-none translate-x-0 top-0 left-0 right-0 translate-y-0" />
                    </div>
                    <Button className="p-0 text-red-500" variant={'link'} asChild>
                        <Link className="font-semibold" to={link}>View all</Link>
                    </Button>
                </div>
                        
                <CarouselContent>
                    {
                        loading
                        ? <div className=" flex justify-center items-center w-screen h-72"><Spinner /></div>
                        : carouselProducts && !loading && carouselProducts.length > 0 
                        && carouselProducts.map(product => (
                            <CarouselItem key={product.id} className="basis-3/5 md:basis-1/4 xl:basis-1/4">
                                <ProductCard product={product} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default ProductsCarousel