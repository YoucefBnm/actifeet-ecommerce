import { ProductCard } from "@/components"
import { Button } from "@/libs/shadcn/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/libs/shadcn/ui/carousel"
import { Link } from "react-router-dom"
import { ProductsCarouselProps } from "./types"

 
const ProductsCarousel = ({title,slides, link}:ProductsCarouselProps) => {
    
    return (
        <div className=" px-default py-8">
            <h3 className="font-heading mb-4 text-neutral-500 text-5xl">{title}</h3>
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
                    <Button className="p-0" variant={'link'} asChild>
                        <Link className="font-semibold" to={link}>View all</Link>
                    </Button>
                </div>
                    
                <CarouselContent>
                    {slides.map(product => (
                        <CarouselItem key={product.id} className="basis-3/5 md:basis-1/3 xl:basis-1/4">
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default ProductsCarousel