import { ProductProps } from "@/components/types"
import { Skeleton } from "@/libs/shadcn/ui/skeleton"
import { selectCount, selectIsFetching, selectLastVisible, selectShopCollectionProducts } from "@/store/shopCollection/shopCollection.selector"
import { useDispatch, useSelector } from "react-redux"
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"
import { fadeVariants } from "@/libs/motion/motion.variatns"
import { ProductCard, Spinner } from "@/components"
import { useEffect, useRef } from "react"
import { useFetchShopProducts } from "@/hooks/useFetchShopProducts"
// import { useAddProudcts } from "@/hooks/useAddProducts"
import { loadMoreStart } from "@/store/shopCollection/shopCollection.action"
import { useSetSortOption } from "@/hooks/useSetSortOption"
import { useSetFilterParams } from "@/hooks/useSetFIltersParams"

type GridCellProps = {product:ProductProps}

const CellSkeloton = () => (
  <div className="flex w-full flex-col gap-2 px-4 text-sm justify-between items-start">
    {/* top */}
    <Skeleton className="w-full h-48 rounded-md" />

    {/* colors */}
    <Skeleton className=" w-1/3 h-5 rounded-md" />

    {/* details */}
    <Skeleton className=" w-1/2 h-12 rounded-sm" />
  </div>
)

const GridCell = ({product}:GridCellProps) => {

  const isFetching = useSelector(selectIsFetching)

  const {ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <motion.div variants={fadeVariants(null)}>
      {
        isFetching || !inView
        ? (
          <motion.div
            variants={fadeVariants(null)}
            initial={{ opacity: 1 }}
            animate={!inView || isFetching ? { opacity: 1 } : { opacity: 0}}
            >
              <div className="mt-auto" ref={ref} />
              <CellSkeloton />
            </motion.div>
        )
        : (
          <motion.div 
            variants={fadeVariants(null)}
            initial={{opacity: 0 }}
            animate={inView ? { opacity: 1 } : {opacity: 0}}
          >
            <ProductCard product={product} />
          </motion.div>
        )
      }
    </motion.div>
      
  )

}

const ShopList = () => {

  // useAddProudcts()
  const { params } = useFetchShopProducts()
  const { getSortParam } = useSetSortOption()
  const { getCheckedFilters } = useSetFilterParams()
  const checkedFilters = getCheckedFilters()

  const products = useSelector(selectShopCollectionProducts)
  const isFetching = useSelector(selectIsFetching)
  const productsCount = useSelector(selectCount)
  const lastVisible = useSelector(selectLastVisible)
  const allLoaded = products.length === productsCount

  const dispatch = useDispatch()
  const observerRef = useRef(null)
  const loadProducts = () => dispatch(loadMoreStart(params, getSortParam, 15, checkedFilters, lastVisible))

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if(entries[0].isIntersecting && !allLoaded && products.length > 0) {
          loadProducts()
        }
      }, { threshold: 0}
    )

    if(observerRef.current) {
      observer.observe(observerRef.current)
    }
    return () => {
      if(observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  })  
  return (
    <article className="min-h-dvh grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,2fr))]">
      {
        products && products.map((product:ProductProps) =>
          <GridCell product={product} key={product.id} />
        )
      }
      {isFetching && !allLoaded && products.length > 0 &&  <div className="block text-center"><Spinner /></div> }
      {products.length > 0 && <div ref={observerRef} />}
    </article>
  )
}

export default ShopList