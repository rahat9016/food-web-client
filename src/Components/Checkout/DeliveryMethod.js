import React from "react";
import CheckoutHeader from "./CheckoutHeader";

const DeliveryMethod = (props) => {
  return (
    <div className="p-4 bg-white shadow-sm">
      <CheckoutHeader number="3" title="Delivery Method" />
      <div className="p-2">
        <legend className="py-1">Select a delivery method</legend>
        <div className="p-2">
          <label className="cursor-pointer mb-1 flex gap-2 " htmlFor="home">
            <input
              type={"radio"}
              name="shipping"
              defaultChecked={true}
              id="home"
              value={60}
              onChange={props.handleChange && props.handleChange}
            />
            Home Delivery - 60৳
          </label>
          <label
            className="cursor-pointer mb-1 flex gap-2 "
            htmlFor="Restaurant"
          >
            <input
              type={"radio"}
              name="shipping"
              id="Restaurant"
              value={0}
              onChange={props.handleChange && props.handleChange}
            />
            Restaurant Pickup - 0৳
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMethod;
