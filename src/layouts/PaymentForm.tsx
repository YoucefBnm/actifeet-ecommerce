import { Spinner } from "@/components"
import { Button } from "@/libs/shadcn/ui/button"
import { Card } from "@/libs/shadcn/ui/card"
import { selectCartTotal } from "@/store/cart/cart.selector"
import { selectCurrentUser } from "@/store/user/user.selector"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react"
import { useSelector } from "react-redux"
import { toast } from "sonner"

const PaymentForm = () => {
    
    const stripe = useStripe()
    const elements = useElements()

    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [processingPayment, setIsProcessingPayment] = useState<boolean>(false)
    
    const paymentHandler = async (e) => {
        e.preventDefault()

        if(!stripe || !elements) {
            return
        }

        setIsProcessingPayment(true)

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json())

        const {paymentIntent: { client_secret }} = response
        
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        })

        setIsProcessingPayment(false)

        if(paymentResult.error) {
            toast.error(paymentResult.error.message)
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                toast.success('Payment Successfull')
            }
        }
    }

  return (
    <Card className="sticky top-20 shadow-sm py-8 px-4 min-w-80 flex flex-col ">
        <form onSubmit={paymentHandler} className="flex flex-col gap-4">
            <CardElement className="w-full" />
            <Button disabled={processingPayment}>
                {processingPayment ? <div className=" inline-flex gap-2 items-center"><Spinner /> Processing</div> : 'Payment'}
            </Button>
        </form>
    </Card>
  )
}

export default PaymentForm