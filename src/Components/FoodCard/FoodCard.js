import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { _add_to_cart } from "../../Redux/Action/Cart";
const FoodCard = (props) => {
  const { colorPicker, food } = props;
  const dispatch = useDispatch();
  // console.log(JSON.parse(localStorage.getItem("cartItems")));
  console.log(food);
  return (
    <div className="w-[180px] h-[200px] relative  mt-10">
      <div
        className={`w-6 h-6 rounded-full  text-primary flex items-center justify-center absolute right-0 top-[-20%] shadow-md`}
      >
        <AiOutlineFire />
      </div>
      <div
        className={`relative w-full h-full rounded-3xl`}
        style={{ backgroundColor: colorPicker() }}
      >
        <div className="absolute left-1/2 top-[-30%] -translate-x-1/2 w-32">
          <img src={food.foodImg[0]?.url} alt="" className="drop-shadow-xl" />
        </div>
        <div className="absolute w-full h-full flex justify-center items-end">
          <div className="w-[70%] mx-auto bg-gradient-to-t from-[#F4FAFD] px-2 text-center 	">
            <h1 className="font-bold font-fira text-xl">{food.name}</h1>
            <span className="block text-secondary">Stating From</span>
            <span className="block text-rose-600 font-bold font-fira">
              ${food.price}
            </span>
            <button
              className="px-4 py-1 bg-[#EC6083] text-white rounded-full mt-1"
              onClick={() =>
                dispatch(
                  _add_to_cart(
                    food._id,
                    food.name,
                    food.foodImg[0]?.url,
                    food.price,
                    1,
                    food.type
                  )
                )
              }
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
