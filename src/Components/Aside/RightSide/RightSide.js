import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../../Cart/CartItem";
import EmptyCart from "../../../Images/undraw_empty_cart_co35.svg";
const RightSide = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const cartTotal = (props) => {
    return cartItems.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.food_qty * nextValue.food_price;
    }, 0);
  };
  return (
    <div className={`px-10 ${props.size}`}>
      <div className="flex flex-col justify-between w-full h-full">
        <div>
          <div className="flex items-center justify-between mt-10">
            <div>
              <h1 className="text-2xl font-bold font-nunito">Cart</h1>
              <p className="text-sm">10+ new dishes in your cart</p>
            </div>
            <div className=" w-10 h-10 bg-pink text-white shadow-md flex flex-col gap-5 items-center justify-center text-lg mt-5 rounded-xl mb-2 cursor-pointer">
              <BiRightArrowAlt className="rotate-90" />
            </div>
          </div>
          {/* Cart items */}
          <div className="mt-6 overflow-y-scroll h-full scrollbar-hide ">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((cartItem, index) => (
                <CartItem key={index} cartItem={cartItem} />
              ))
            ) : (
              <div className="text-center">
                <img
                  src={EmptyCart}
                  alt=""
                  className="block mr-auto ml-auto mt-10 "
                />
                <h2 className="text-xl font-bold font-nunito mt-4 text-[#454751]">
                  Your cart is empty
                </h2>
                <p className="text-[#B7B8C0] leading-4">
                  Looks like you have not added anything to you cart. Go ahead &
                  explore top categories
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-10">
          <div className="flex justify-between mb-6">
            <h1 className="text-2xl font-bold font-nunito">Total</h1>
            <h2 className="text-2xl font-bold font-nunito text-[#A187FF]">
              ${cartTotal()}
            </h2>
          </div>
          <div
            className={`w-full h-12  flex items-center justify-center rounded-lg shadow-lg ${
              cartItems.length > 0
                ? "bg-primary"
                : "bg-primary opacity-25 cursor-no-drop"
            }`}
          >
            <button
              className={`font-nunito font-bold text-white `}
              onClick={() => navigate("/checkout")}
              disabled={cartItems.length > 0 ? false : true}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
