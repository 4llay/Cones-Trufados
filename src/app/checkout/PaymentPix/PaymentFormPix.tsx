'use client'

import { useRouter } from "next/navigation";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useCart } from "../../../../hooks/useCart";
import { formatPrice } from "../../../../utils/formatPrice";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js"

const PaymentForm = () => {
    const { cartTotalAmount, cartProducts, paymentIntent, handleSetPaymentIntent} = useCart();
    const [isLoading, setIsLoading] = useState(false)
    const formattedPrice = formatPrice(cartTotalAmount)
    const router = useRouter()
    
    const [error, setError] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState(false)

    console.log("paymentIntent", paymentIntent)
    console.log("clientSecret", clientSecret)

    useEffect(() => {
        if (cartProducts) {
            setIsLoading(true)
            setError(false)

            fetch('/api/create-payment-intent2', {
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
        <div className="w-full flex flex-col items-center">
            <h1 className="text-[3dvw]">Pague usando o pix</h1>
            <h1 className="text-[2dvw] pt-[3dvh]">Chaves pix disponiveis...</h1>
            <img src="/qrcode-pix.png" className="pt-[2dvh]"></img>
            <h1 className="text-[2dvw] pt-[3dvh]">4llayjpcg@gmail.com...</h1>
            <h1 className="text-[2dvw] pt-[3dvh]">(48) 99630-6122</h1>
            <h1 className="text-[2dvw] pt-[3dvh]">8e48dec5-8d5d-44e0-b42b-2c2018a54e5c</h1>
        </div>
    );
}

export default PaymentForm;