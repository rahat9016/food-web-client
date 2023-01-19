import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
const OrderItem = ({ order }) => {
  const foods = order.foods;

  // console.log(foods);

  return (
    <div className="shadow w-full bg-white">
      <div className="flex justify-between p-2">
        <div>
          {foods.map((food) => {
            return (
              <div key={food._id}>
                <div>
                  <h1>Order# {food._id}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-green-500 flex items-center gap-1">
            <IoIosCheckmarkCircle className="text-xl" /> {order.orderStatus}
          </h1>
        </div>
      </div>
      <div className="bg-lightWhite p-2">
        {foods.map((food) => {
          return (
            <div key={food._id} className="flex items-center gap-2 mb-1">
              {food.food.foodImg && (
                <img src={food.food?.foodImg[0].url} alt="" className="w-12" />
              )}
              {food.food.offerImg && (
                <img src={food.food?.offerImg.url} alt="" className="w-12" />
              )}
              <h1>{food.food.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderItem;
