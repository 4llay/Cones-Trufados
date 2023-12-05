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

            fetch('/api/create-payment-intent1', {
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
            <form id="payment-form" action={"/"}>
                <div className="mb-6">
                    <Heading title="Digite suas informações para continuar" />
                </div>
                <h2 className="font-semibold mt-4 mb-2">Digite suas informações</h2>
                <Label htmlFor="Nome">Nome do destinatario</Label>
                <Input id="i1" placeholder="Digite seu nome aqui" required />
                <Label htmlFor="Nome">Endereço</Label>
                <Input id="i2" placeholder="Digite seu endereço aqui" required />
                <Label htmlFor="Nome">Informações extras</Label>
                <Input id="i3" placeholder="De mais detalhes sobre seu endereço caso necessario" />
                <br />
                <h2 className="font-semibold mt-4 mb-2">Informações de pagamento</h2>
                <Label htmlFor="Numero do Cartão De Credito">Numero do cartão de credito</Label>
                <Input id="i4" placeholder="**** **** **** ****" required />
                <Label htmlFor="Data de vencimento">Data de vencimento</Label>
                <Input id="i5" placeholder="MM / YY" required />
                <Label htmlFor="Codigo de segurança">Codigo de segurança</Label>
                <Input id="i6" placeholder="CVC" required />
                <div className="py-4 text-center text-slate-700 text-xl font-bold">
                    Total: {formattedPrice}
                </div>
                <Button label={isLoading ? 'Processando' : 'Pague agora'} onClick={() => {  router.push('/login') }} />
            </form>
        </div>
    );
}

export default PaymentForm;