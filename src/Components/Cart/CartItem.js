import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { colorPicker } from "../../Data/Colors";
import { _add_to_cart, _remove_to_cart } from "../../Redux/Action/Cart";
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    let newQty = cartItem.food_qty + 1;
    dispatch(
      _add_to_cart(
        cartItem.food_id,
        cartItem.food_name,
        cartItem.food_img,
        cartItem.food_price,
        newQty
      )
    );
  };
  const handleDecrement = () => {
    if (cartItem.food_qty > 1) {
      let newQty = cartItem.food_qty - 1;
      dispatch(
        _add_to_cart(
          cartItem.food_id,
          cartItem.food_name,
          cartItem.food_img,
          cartItem.food_price,
          newQty
        )
      );
    }
  };
  return (
    <div className="flex items-center justify-between mb-2 ">
      <div className="flex gap-2 items-center">
        <div
          className="w-16 h-16  flex items-center justify-center rounded-xl p-2"
          style={{ backgroundColor: colorPicker() }}
        >
          <img src={cartItem.food_img} alt="" className="w-16" />
        </div>
        <div>
          <h1 className="">{cartItem.food_name}</h1>
          <p className="text-primary font-poppins font-medium">
            ${cartItem.food_price}
          </p>
          <span
            className="text-sm text-rose-400 hover:text-rose-500 cursor-pointer"
            onClick={() => dispatch(_remove_to_cart(cartItem.food_id))}
          >
            Remove
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <BiMinus className="cursor-pointer" onClick={handleDecrement} />
        <span
          className="w-6 h-6  flex items-center justify-center rounded-md text-white font-bold font-nunito p-2 text-sm"
          style={{ backgroundColor: "rgb(95, 87, 207)" }}
        >
          {cartItem.food_qty}
        </span>
        <BiPlus onClick={handleIncrement} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartItem;
