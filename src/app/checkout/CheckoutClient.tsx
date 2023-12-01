'use client'

import { useCallback, useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js"
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { formatPrice } from "../../../utils/formatPrice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

const CheckoutClient = () => {
    const { cartTotalAmount, cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const formattedPrice = formatPrice(cartTotalAmount)
    const router = useRouter()

    console.log("paymentIntent", paymentIntent)
    console.log("clientSecret", clientSecret)

    useEffect(() => {
        if (cartProducts) {
            setIsLoading(true)
            setError(false)

            fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cartProducts,
                    payment_intent_id: paymentIntent,
                }),
            }).then((res) => {
                setIsLoading(false)
                if (res.status === 401) {
                    return router.push('/login')
                }

                return res.json()
            }).then((data) => {
                setClientSecret(data.paymentIntent.client_secret)
                handleSetPaymentIntent(data.paymentIntent.id)
            }).catch((error) => {
                setError(true)
                console.log("Error", error);
                toast.error('Algo deu errado :(')
            })
        }
    }, [cartProducts, paymentIntent])

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: 'stripe',
            labels: 'floating'
        }
    }

    const handleSetPaymentSuccess = useCallback((value: boolean) => {
        setPaymentSuccess(value)
    }, [])

    return (
        <div className="w-full">
            <form id="payment-form">
                <div className="mb-6 text-center text-[4dvh] font-bold">
                    <h1>Escolha uma forma de pagamento</h1>
                </div>
                <div className="flex w-full justify-around text-[7dvh] mb-[50px]">
                    <div className="text-center">
                        <a href="/"><i className="fa-regular fa-credit-card"></i></a>
                        <h1 className="text-[3dvh] font-bold">Cartão</h1>
                    </div>
                    <div className="text-center">
                        <a href="/"><i className="fa-brands fa-pix"></i></a>
                        <h1 className="text-[3dvh] font-bold">Pix</h1>
                    </div>
                    <div className="text-center">
                        <a href="/"><i className="fa-solid fa-money-bills"></i></a>
                        <h1 className="text-[3dvh] font-bold">Dinheiro</h1>
                    </div>
                </div>
                <h2 className="font-semibold text-[2dvh] mt-4 mb-2 text-center">Escolha uma forma para realizar o pagamento do produto na hora do recebimento...</h2>
            </form>
        </div>
    );
}

export default CheckoutClient;