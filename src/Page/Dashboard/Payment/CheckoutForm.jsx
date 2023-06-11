import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckoutForm = ({ price, selected }) => {
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState();
    const [transactionId, setTransactionId] = useState('');
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements();
    useEffect(() => {

        axiosSecure.post('create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })

    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('')

        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unKnown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(cardError);
        }
        console.log('payment intent', paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                data: new Date(),
                quantity: selected.length,
                items: selected.map(item => item._id),
                itemsNames: selected.map(item => item.name),
                transactionId: selected.map(item => item.transactionId)

            }
            axiosSecure.post('/payments', payment)
                .then(res => {

                    if (res.data.result.insertedId) {
                    }
                })
        }

    }
    return (
        <>
            <form className="border-4 rounded-xl  bg-red-100 p-14 border-violet-600" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#000000',
                                '::placeholder': {
                                    color: '#000000',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-outline btn-error btn-sm mt-10 " disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            <p>{transactionId}</p>
        </>
    );
};

export default CheckoutForm;