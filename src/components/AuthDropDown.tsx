import { IconUser } from "@/assets"
import { Popover, PopoverContent, PopoverTrigger } from "@/libs/shadcn/ui/popover"
import { AuthDropdownProps } from "./types"
import { Separator } from "@/libs/shadcn/ui/separator"
import { Button } from "@/libs/shadcn/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentUser, selectLoading } from "@/store/user/user.selector"
import { Avatar, AvatarFallback, AvatarImage } from "@/libs/shadcn/ui/avatar"
import { Spinner } from "."

const AuthDropdownContent = ({title, lead, children}:AuthDropdownProps) => {

  const isLoading = useSelector(selectLoading)
  const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate()
  return (
    // !currentuser 
    <Popover>
      {
        currentUser
        ? (
          <Avatar title="go to profile" aria-label="profile link" onClick={() => navigate('/profile')} className="cursor-pointer transition-opacity hover:opacity-75 w-8 h-8">
            {isLoading && <div className="w-5 h-5"><Spinner /></div>}
            <AvatarImage src={currentUser.photoURL} />
            <AvatarFallback>
              {
                currentUser.displayName
                ? <span className="font-bold uppercase">{currentUser.displayName[0]}{currentUser.displayName[1]}</span>
                : <span className="font-bold uppercase">a</span>
              }
            </AvatarFallback>
          </Avatar>
        )
        : (
          <PopoverTrigger aria-label="authentication dropdown trigger" className="cursor-pointer" asChild>
        <img width={23} height={23} src={IconUser} aria-hidden={true} />
      </PopoverTrigger> 
        )
      }
      <PopoverContent className="flex flex-col gap-4 mr-4 w-80 py-6 px-4">
        <div className="flex flex-col gap-2">
          <h4 className="font-heading text-lg">{title}</h4>

          <p className="text-sm leading-normal text-neutral-600">
            {lead}
          </p>
        </div>

        <Separator />

        <div className="flex flex-col items-stretch gap-2">
          {children}
        </div>
      </PopoverContent>
    </Popover>
  )
}

const AuthDropdown = () => {
  return (
    <AuthDropdownContent
      title="Create your account for free"
      lead='Create your account or if you are already a member login to get members benefits like fast checkout, coupons, discounts, special offers, and our newest shoes and collections.'
    >
      <Button variant={'outline'} asChild><Link to='/auth/login'>Login</Link></Button>
      <Button asChild>
        <Link to='/auth/signup'>Create your account</Link>
      </Button>
    </AuthDropdownContent>
  )
}

export default AuthDropdown