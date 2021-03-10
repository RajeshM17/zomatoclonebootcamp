import React from 'react';
import StripeButton from 'react-stripe-checkout';
export default function StripeButtonComponent({price}){
    const publishableStripeKey='pk_test_51IT5OuIQuc1lrHeNAnA8EsNVGl72hEaPGHWHanh1KjCVpltxbwyLVx3S6zKdGEei0rHo8E2tXQUR6Ga44jYc0Xhl00RWkP1Cdx';
    const onToken=(token)=>{
        console.log(token);
        alert("payment successfull");
    }

    return(
        <StripeButton
        image=""
        label="Order Now"
        name="zomato Clone"
        ShippingAddress
        billingAddress
        description={`Price ${price}`}
        token={onToken} 
        stripeKey={publishableStripeKey}
        />
    )
}