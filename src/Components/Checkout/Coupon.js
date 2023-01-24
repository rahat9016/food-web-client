import React from "react";
const Coupon = (props) => {
  return (
    <form
      className="bg-white shadow-sm py-4 px-2 my-4  w-full items-center"
      onClick={props.handleDiscountButton}
    >
      <input
        className="p-2 border border-gray rounded-md outline-none focus:border-gray w-3/4	"
        placeholder="Promo / Coupon code"
      />
      <button
        className="text-sm bg-pink text-white rounded-sm p-2 w-1/4	"
        type="submit"
      >
        Apply
      </button>
    </form>
  );
};

export default Coupon;
