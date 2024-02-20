import { CartItem, Spinner } from "@/components"
import PaymentForm from "@/layouts/PaymentForm"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/libs/shadcn/ui/card"
import { ScrollArea } from "@/libs/shadcn/ui/scroll-area"
import { Separator } from "@/libs/shadcn/ui/separator"
import { selectCartItems, selectCartTotal, selectLoading } from "@/store/cart/cart.selector"
import { CartItemProps } from "@/store/cart/types"
import { formatPrice } from "@/utils/price/price.utils"
import { Fragment } from "react"
import { useSelector } from "react-redux"

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const loading = useSelector(selectLoading)
  return (
    <main>
      {
        cartItems
        && (
            <div className="px-default py-8 flex gap-8 items-start justify-center">
              <Card className="bg-neutral-50 overflow-hidden relative">
                {loading && <div className="absolute inset-0 bg-neutral-950 opacity-10 flex justify-center items-center z-10"><Spinner /></div>}

                <CardHeader className="flex items-start justify-between">
                  <CardTitle className="text-neutral-500">Shopping Cart</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2">
                  <ScrollArea className="w-full h-[450px] min-h-72 pr-4 ">
                    {
                      cartItems.map((cartItem:CartItemProps,index) => (
                        <Fragment key={cartItem.id}>
                          <CartItem cartItem={cartItem} />
                          {index!==(cartItems.length-1) && <Separator />}
                        </Fragment>
                      ))
                    }
                  </ScrollArea>

                  <CardFooter className="flex items-center gap-2 font-semibold">
                    <h4 className=" text-neutral-700">Total</h4>
                    <span>${formatPrice(cartTotal)}</span>
                  </CardFooter>
                </CardContent>
              </Card>

              <PaymentForm />
            </div>
        )
      }
    </main>
  )
}

export default Checkout