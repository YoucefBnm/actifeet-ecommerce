import { IconCart } from '@/assets'
import { CartItem, Spinner } from '@/components'
import { Button } from '@/libs/shadcn/ui/button'
import { ScrollArea } from '@/libs/shadcn/ui/scroll-area'
import { Separator } from '@/libs/shadcn/ui/separator'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/libs/shadcn/ui/sheet'
import { selectCartCount, selectCartItems, selectCartTotal, selectLoading } from '@/store/cart/cart.selector'
import { CartItemProps } from '@/store/cart/types'
import { selectCount } from '@/store/shopCollection/shopCollection.selector'
import { selectCurrentUser } from '@/store/user/user.selector'
import { formatPrice } from '@/utils/price/price.utils'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartContainer = () => {

    const cartItems = useSelector(selectCartItems)
    const cartCount = useSelector(selectCount)
    const cartTotal = useSelector(selectCartTotal)
    const isLoading = useSelector(selectLoading)

    return (
        <SheetContent className="gap-8 w-full flex flex-col">
            <SheetHeader className='self-stretch'>
                <SheetTitle className='flex items-center gap-1 font-semibold text-neutral-700 text-xl'>
                    <span>Your Cart</span>
                    <span className=' text-neutral-950'>{cartCount}</span>
                </SheetTitle>
            </SheetHeader>

            <ScrollArea className='relative w-full'>
                <div className="flex flex-col gap-8 items-stretch">
                    {
                        cartItems.map((cartItem:CartItemProps) => 
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        )
                    }
                </div>
                {isLoading && <div className=' bg-neutral-950 rounded-md flex items-center justify-center opacity-25 absolute inset-0 z-10'><Spinner /></div>}
            </ScrollArea>

            <SheetFooter className='items-center flex gap-4'>
                <div className="flex w-full gap-2 items-center font-semibold">
                    <h4 className=" text-neutral-500">Total</h4>
                    <h4>${formatPrice(cartTotal)}</h4>
                </div>

                <Button asChild>
                    <Link to='/checkout'>Proceed to Checkout</Link>
                </Button>
            </SheetFooter>
        </SheetContent>
    )
}


const CartEmpty = () => {
    const currentUser = useSelector(selectCurrentUser)

    return (
        <SheetContent className=' flex flex-col gap-4'>
            <SheetHeader className='self-stretch'>
                <SheetTitle className='flex items-center gap-1 font-semibold text-neutral-700 text-xl'>
                    Your Cart Is empty.
                </SheetTitle>
                <div className="text-sm">Your cart is empty, explore our shop collections to find your shoes.</div>
            </SheetHeader>
            
            <Separator />

            <div className="flex gap-2">
                {!currentUser && <Button asChild>
                    <Link to='/auth/login'>Login</Link>
                </Button>}
                <Button asChild>
                    <Link to='/shop/men'>Shop Men</Link>
                </Button>
                <Button asChild>
                    <Link to='/shop/women'>Shop Women</Link>
                </Button>
            </div>
        </SheetContent>
    )
}
const Cart = () => {

    const cartItemsCount = useSelector(selectCartCount)

  return (
    <Sheet>
        <div className="cursor-pointer relative">
            <SheetTrigger asChild>
                <img 
                    className='align-middle'
                    width={24} 
                    height={24} 
                    src={IconCart}
                    aria-hidden='true'
                />
            </SheetTrigger>

            {
                cartItemsCount > 0
                && <div className="absolute pointer-events-none -top-1 left-5 bg-neutral-950 tracking-tighter flex justify-center items-center w-4 h-4 rounded-full text-[8px] text-white text-center">
                    {cartItemsCount > 10 ? '+10' : cartItemsCount}
                </div>
            }
        </div>

        {
            cartItemsCount
            ? <CartContainer />
            : <CartEmpty />
        }
    </Sheet>
  )
}

export default Cart