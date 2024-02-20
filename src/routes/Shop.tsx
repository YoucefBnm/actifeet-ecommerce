import { Spinner } from "@/components"
import { selectIsFetching, selectShopCollectionProducts } from "@/store/shopCollection/shopCollection.selector"
import { Suspense } from "react"
import { useSelector } from "react-redux"
import {useMediaQuery} from '@react-hook/media-query'
import { Sheet, SheetContent, SheetTrigger } from "@/libs/shadcn/ui/sheet"
import { IconFilters } from "@/assets"
import { ShopList, ShopNav } from "@/layouts"

const ShopLoader = () => (
  <div className="w-screen h-svh bg-neutral-50 flex items-center justify-center">
    <div className=" w-14 h-14">
      <Spinner />
    </div>
  </div>
)

const Shop = () => {

  const isMobile = useMediaQuery('only screen and (max-width: 900px)')

  const isFetching = useSelector(selectIsFetching)
  const shopProducts = useSelector(selectShopCollectionProducts)
  return (
    <main>
      {/* <Suspense fallback={<ShopLoader />}>
        {
          shopProducts.length===0
          ? <ShopLoader />
          : (
            screenSize
            ? (<div className="sticky top-20 -ml-8 left-2 mb-4 w-fit inline-flex items-center justify-center p-1.5 border border-neutral-200 bg-neutral-400 transition-colors hover:bg-neutral-600">
                  <Sheet>
                    <SheetTrigger asChild>
                      <button className=" appearance-none" title='filters' role="button" aria-label="navigation filters trigger">
                        <img width={16} height={16} src={IconFilters} aria-hidden='true' />
                      </button>
                    </SheetTrigger>
                    <SheetContent>
                      <ShopNav />
                    </SheetContent>
                  </Sheet>
                </div>
              ) : (
                <ShopNav />
              )
          )
        }
      </Suspense> */}

      <div 
        className={`grid items-start px-default py-8 ${isMobile ? '' : 'grid-cols-[256px_1fr] gap-x-2'}`}
      >
        {
          isMobile
          ? (
            <div className="sticky top-20 left-2 mb-4 w-fit inline-flex items-center justify-center p-1.5 border border-neutral-100 bg-neutral-300 rounded-full shadow-sm z-10 transition-colors hover:bg-neutral-600">
              <Sheet>
                <SheetTrigger asChild>
                  <button title='shop filters' role="button" aria-label="filters trigger" className=" appearance-none">
                    <img width={16} height={16} src={IconFilters} aria-hidden='true' />
                  </button>
                </SheetTrigger>  
                <SheetContent>
                  <ShopNav />
                </SheetContent>
              </Sheet>  
            </div>
          )
          : <ShopNav />
        }
        
        <ShopList />
      </div>
    </main>
  )
}

export default Shop