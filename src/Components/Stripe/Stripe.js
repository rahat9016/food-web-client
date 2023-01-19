import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { _stripe, _stripe_update } from "../../Redux/Action/Stripe";
const Stripe = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const id = localStorage.getItem("orderId");
  useEffect(() => {
    _stripe(id).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [id]);
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: e.target.name.value,
        },
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      if (id && payload) {
        _stripe_update(id, payload.paymentIntent).then((res) => {
          if (res.status === 200) {
            localStorage.removeItem("orderId");
            navigate("/order");
          }
        });
      }
    }
  };

  // Cart Style
  const cartStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  return (
    <div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cartStyle}
          onChange={handleChange}
        />
        <button
          className="stripe-button"
          disabled={processing || disabled || succeeded}
        >
          {processing ? <div className="spinner"></div> : "Pay"}
        </button>
        {error && (
          <div
            className="card-error text-center my-2 text-red-600 font-semibold"
            role="alert"
          >
            {error}
          </div>
        )}
        {!error && succeeded && (
          <div
            className="card-error text-center my-2 text-green-600 font-semibold"
            role="alert"
          >
            Payment Successful
          </div>
        )}
      </form>
    </div>
  );
};

export default Stripe;
