import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { _add_to_cart } from "../../Redux/Action/Cart";
const FoodCard = (props) => {
  const { colorPicker, food } = props;
  const dispatch = useDispatch();

  return (
    <div className="w-[120px] h-[140px] md:w-[140px] md:h-[160px] lg:w-[130px] lg:h-[150px] relative  mt-10 mx-auto mb-5 xl:w-[150px] xl:h-[180px]">
      <div
        className={`w-6 h-6 rounded-full text-primary flex items-center justify-center absolute right-0 top-[-20%] shadow-md`}
      >
        <AiOutlineFire />
      </div>
      <div
        className={`relative w-full h-full rounded-3xl`}
        style={{ backgroundColor: colorPicker() }}
      >
        <div className="absolute left-1/2 top-[-30%] -translate-x-1/2 w-20 xl:w-24">
          <img src={food.foodImg[0]?.url} alt="" className="drop-shadow-xl" />
        </div>
        <div className="absolute w-full h-full flex justify-center items-end">
          <div className="w-[70%] mx-auto bg-gradient-to-t from-[#F4FAFD] px-2 text-center 	">
            <h1 className="font-bold font-fira text-base xl:text-xl leading-5">
              {food.name}
            </h1>
            <span className="block text-secondary text-[12px] md:text-base">
              Stating From
            </span>
            <span className="block text-rose-600 font-bold font-fira">
              ${food.price}
            </span>
            <button
              className="px-3 py-1 md:px-4 md:py-1 text-sm md:text-base  bg-[#EC6083] text-white rounded-full mt-1"
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
