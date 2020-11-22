import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { axios_instance as axios, fireBaseMediaURL } from '../../config';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_RbGyqUNtLADfy0AbvHBnDwVc00B55LwkFH';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful!');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue. Please sure you use the provided credit card!');
        });
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='VIGG Marketplace'
            billingAddress
            shippingAddress
            image={ fireBaseMediaURL('icons%2Fvigg_small_icon.png') }
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;