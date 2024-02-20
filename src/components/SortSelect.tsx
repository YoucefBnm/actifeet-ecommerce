import { sortOptions } from '@/firebase/products/products.controllers'
import { useSetSortOption } from '@/hooks/useSetSortOption'
import { Label } from '@/libs/shadcn/ui/label'
import { RadioGroup, RadioGroupItem } from '@/libs/shadcn/ui/radio-group'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/libs/shadcn/ui/select'

const SortSelect = () => {


  const { getSortParam, setSortOption } = useSetSortOption()
  return (
    <Select>
      <SelectTrigger className='w-full text-neutral-700'>
        <SelectValue placeholder='Sort by' />
      </SelectTrigger>

      <SelectContent className='p-2'>
        <RadioGroup className='' aria-checked='true' defaultChecked={true}>
          {
            Object.keys(sortOptions).map((key) => (
              <div key={key} className='flex gap-x-2'>
                <RadioGroupItem 
                  checked={key===getSortParam}
                  onClick={() => setSortOption(key)}
                  value={key}
                  id={key}
                />
                <Label className='capitalize' htmlFor={key}>{key}</Label>
              </div>
            ))
          }
        </RadioGroup>
      </SelectContent>
    </Select>
  )
}

export default SortSelect