import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { savePaymentMethod } from './../actions/cart.actions';

// React Bootstrap
import { Form, Button, Col } from 'react-bootstrap';

// Components
import FormContainer from './../components/FormContainer';
import CheckoutSteps from './../components/CheckoutSteps';

const PaymentPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  let { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/*<Form.Check
              type="radio"
              label="CreditCard"
              id="CreditCard"
              name="paymentMethod"
              value="CreditCard"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>*/}
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentPage;
