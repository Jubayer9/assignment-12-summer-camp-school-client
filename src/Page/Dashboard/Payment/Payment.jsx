import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useClass from '../../Hook/useClass';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    const [selected] = useClass();
    const total = selected.reduce((sum, item) => sum + item.price, 0);
    const price =parseFloat(total.toFixed(2))


    return (
        <div className='w-1/2'>
            <SectionTitle heading={'Pay Now'}
                subHeading='pay now your class'
            ></SectionTitle>
            <Elements
                stripe={stripePromise}>

                <CheckoutForm selected={selected} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};
export default Payment;