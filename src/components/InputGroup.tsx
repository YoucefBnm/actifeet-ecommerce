import { Input } from "@/libs/shadcn/ui/input"
import { Label } from "@/libs/shadcn/ui/label"

const InputGroup = ({label, handleChange, ...otherProps}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label className="capitalize font-semibold" htmlFor={label}>
        {label}
      </Label>
      <Input id={label} placeholder={label} onChange={handleChange} {...otherProps} />
    </div>
  )
}

export default InputGroup