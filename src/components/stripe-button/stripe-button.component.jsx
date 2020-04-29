import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import Logo from '../../assets/crown.svg';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_VZFByzHrG126AdMzYOu6xNDZ00KU5Dpkyh';

  const onToken = token => {
    console.log(token);

    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Clothing Ecommerce"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;