import { SortSelect, Spinner } from "@/components"
import { SHOP_FILTERS } from "@/constants/shopFilters"
import { useFetchShopProducts } from "@/hooks/useFetchShopProducts"
import { useSetFilterParams } from "@/hooks/useSetFIltersParams"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/libs/shadcn/ui/accordion"
import { Badge } from "@/libs/shadcn/ui/badge"
import { Checkbox } from "@/libs/shadcn/ui/checkbox"
import { Label } from "@/libs/shadcn/ui/label"
import { ScrollArea } from "@/libs/shadcn/ui/scroll-area"
import { selectCount, selectIsFetching } from "@/store/shopCollection/shopCollection.selector"
import { useSelector } from "react-redux"

type FilterItemProps = {
  type: string;
  label: string;
  isChecked: boolean;
  handleChange: (checked:boolean) => void
}

const ShopNavCheckedFilters = () => {
  const { removeValue, getCheckedFilters } = useSetFilterParams()
  const checkedFilters = getCheckedFilters()
  const isFetching = useSelector(selectIsFetching)

  return (
    <>
      {
        Object.values(checkedFilters).length > 0 && (
          <div className="flex flex-wrap gap-1 5">
            {
              Object.keys(checkedFilters).map(key => (
                checkedFilters[key]?.map(filter => 
                  <Badge key={filter} className="rounded-full font-normal leading-none ">
                    {filter}
                    <button 
                      role="button"
                      className=" appearance-none ml-1"
                      aria-label="remove tag"
                      onClick={() => removeValue(key, filter)}
                      disabled={isFetching}
                    >
                      <span className="align-middle">&times;</span>
                    </button>
                  </Badge>
                )
              ))
            }
          </div>
        )
      }
    </>
  )
}

const FilterItem = (props:FilterItemProps) => {

  const { type, label, isChecked, handleChange} = props
  const isFetching = useSelector(selectIsFetching)

  return (
    <div className={`flex py-1 justify-center items-center relative group-${type}`}>
      <Checkbox 
        id={label}
        checked={isChecked}
        onCheckedChange={handleChange}
        value={label}
        disabled={isFetching}
        className={`absolute inset-0 w-full h-full input-${type} ${isChecked ? 'border-2 border-neutral-900' : 'border-neutral-500'}`}
        style={type==='colors' ? {backgroundColor: label} : { backgroundColor: 'transparent'}}
      />
      <Label 
        className={`z-10 capitalize checked:font-semibold ${isChecked ? 'font-semibold text-neutral-900' : 'font-normal text-neutral-500'}`}  
        htmlFor={label}
      >
        {label}
      </Label>
    </div>

  )
}
const ShopNavFiltersWrap = () => {

  const {params} = useFetchShopProducts()
  const filtersKey = Object.values(params).join('')
  const { getCheckedFilters, addValue, removeValue } = useSetFilterParams()

  const checkedFilters = getCheckedFilters()
  return (
    <>
      <ShopNavCheckedFilters />

      {
        filtersKey && (
          Object.keys(SHOP_FILTERS[filtersKey]).map((key,index) => (
            <Accordion 
              key={`${key}-${index}`}
              type="single"
              collapsible
              className="flex flex-1 w-full flex-col gap-2"
            >
              {
                SHOP_FILTERS[filtersKey][key].length > 1
                && <AccordionItem value={key}>
                  <AccordionTrigger className="font-semibold capitalize">
                    {key}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-wrap gap-1">
                    {
                      SHOP_FILTERS[filtersKey][key].map((filterItem:string) => (
                        <FilterItem 
                          key={filterItem} 
                          label={filterItem} 
                          type={key}
                          isChecked={checkedFilters[key] ? (checkedFilters[key]?.includes(filterItem) ?? false) : false}
                          handleChange={(checked) => {
                            if(checked) {
                              addValue(key, filterItem)
                            }
                            if(!checked) {
                              removeValue(key, filterItem)
                            }
                          }}
                        />
                      ))
                    }

                  </AccordionContent>
                </AccordionItem>
              
              }
            </Accordion>
          ))
        )
      }
    </>
  )
}

const ShopNav = () => {
  
  const productsCount = useSelector(selectCount)
  const isFetching = useSelector(selectIsFetching)

  return (
    <aside className="sticky rounded-md left-0 top-16 w-full bg-neutral-50 overflow-hidden">
      {isFetching && <div className="absolute z-10 inset-0 bg-neutral-950 opacity-5 flex items-center justify-center max-h-full"><Spinner /></div>}
      <ScrollArea className="flex flex-col max-h-[450px] w-full items-start py-4 justify-start pl-2 pr-4">
        <SortSelect />
        
        <div className="group w-full my-5">
          <h3 className="">
            <span className="text-sm">{productsCount} <span className="text-base font-semibold text-neutral-600">Product</span></span>
          </h3>
        </div>

        <ShopNavFiltersWrap />
      </ScrollArea>
    </aside>
  )
}

export default ShopNav