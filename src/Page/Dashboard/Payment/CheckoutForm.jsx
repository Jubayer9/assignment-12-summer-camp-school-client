import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import useClass from "../../Hook/useClass";
import Swal from "sweetalert2";


const CheckoutForm = ({ price, selected }) => {
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState();
    const [transactionId, setTransactionId] = useState('');
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [, refetch] = useClass();
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
     
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                data: new Date(),
                quantity: selected.length,

                selectedItems: selected.map(item => item._id),
                SelectedClassId: selected.map(item => item.SelectedClassId),
                status: 'service Pending',
                itemsNames: selected.map(item => item.name),


            }
            axiosSecure.delete('/payments', payment)
            .then(res => {
                refetch()
                if (res.data.insertResult.insertedId) {
    
                }
            })
            Swal.fire({
                title: ' Your payment is successfully payed 🥳🥳🥳',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
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