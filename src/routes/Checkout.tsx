import { CartItem } from "@/components"
import { Card, CardContent, CardHeader, CardTitle } from "@/libs/shadcn/ui/card"
import { selectCartItems } from "@/store/cart/cart.selector"
import { CartItemProps } from "@/store/cart/types"
import { useSelector } from "react-redux"

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  return (
    <main>
      {
        cartItems
        && (
            <div className="px-default py-8">
              <Card className="mx-auto w-2/3 ">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-neutral-500">Your Cart</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2">
                  {
                    cartItems.map((cartItem:CartItemProps) => (
                      <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                  }
                </CardContent>
              </Card>
            </div>
        )
      }
    </main>
  )
}

export default Checkout