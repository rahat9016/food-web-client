import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Address from "../../Components/Checkout/Address";
import Coupon from "../../Components/Checkout/Coupon";
import DeliveryMethod from "../../Components/Checkout/DeliveryMethod";
import OrderOverview from "../../Components/Checkout/OrderOverview";
import PaymentMethod from "../../Components/Checkout/Payment";
import Layout from "../../Components/Layout/Layout";
import { _delete_cart_item } from "../../Redux/Action/Cart";
import { _order } from "../../Redux/Action/Order";
import axiosInstance from "../../utility/axios";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  fullAddress: "",
  city: "",
  zone: "",
  number: "",
};
const Checkout = () => {
  const [values, setValues] = useState(initialState);
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState(60);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const auth = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setDelivery(parseInt(e.target.value));
  };
  const cartTotal = () => {
    return cartItems.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.food_qty * nextValue.food_price;
    }, 0);
  };

  //Total amount after discount
  const totalAmountAfterDiscount = cartTotal() - 0 + delivery;
  //handle user information function
  const handleUserInformation = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setValues({ ...values, ...auth });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderValues = {
      cartItems,
      values,
      payment,
      totalAmountAfterDiscount,
      delivery,
    };
    await axiosInstance.post("/order", orderValues).then((res) => {
      const { paymentIntent, _id } = res.data.newOrder;
      if (res.status === 201) {
        dispatch(_delete_cart_item());
        if (paymentIntent === "Online Payment") {
          localStorage.setItem("orderId", _id);
          navigate("/payment");
        } else {
          navigate("/order");
        }
      }
    });
  };
  return (
    <Layout>
      {" "}
      <div className=" w-full md:w-9/12 mx-auto px-2">
        <h1 className="my-6 text-2xl font-fira font-bold ">Checkout</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            {/* Customer Information */}
            <div className="mb-10">
              <Address
                handleUserInformation={handleUserInformation}
                values={values}
              />
            </div>
            {/* Payment Method */}
            <div className="mb-10">
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-[49.5%] ">
                  <PaymentMethod setPayment={setPayment} />
                </div>
                {/* Delivery Method  */}
                <div className="w-full md:w-[49.5%]">
                  <DeliveryMethod handleChange={handleChange} />
                  <Coupon />
                </div>

                <OrderOverview
                  cart={cartItems}
                  delivery={delivery}
                  totalAmountAfterDiscount={totalAmountAfterDiscount}
                  cartTotal={cartTotal}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end ">
            <button
              className={`font-fira font-sm text-lg bg-pink ${
                cartItems.length > 0
                  ? "bg-pink"
                  : "bg-pink opacity-25 cursor-no-drop"
              } px-4 py-2 text-white mb-6 rounded`}
              disabled={cartItems.length > 0 ? false : true}
            >
              Confirm order
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
