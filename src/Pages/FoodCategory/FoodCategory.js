import React from "react";
import Layout from "../../Components/Layout/Layout";
import { _add_to_cart } from "../../Redux/Action/Cart";
// import required modules
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
const FoodCategory = () => {
  const foods = useSelector((state) => state.foods.foods);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:lg:grid-cols-5 gap-3 px-2 lg:px-20 mt-10">
        {foods.map((food, index) => {
          return (
            <div
              className="bg-[#fff] px-10 py-2 shadow-sm hover:shadow-md rounded-md "
              key={index}
            >
              <img
                src={food.foodImg[0].url}
                alt=""
                className="h-32 mr-auto ml-auto"
              />{" "}
              <div>
                <h1 className="text-center text-xl font-fira w-full h-11">
                  {food.name}
                </h1>
                <p className="text-center p-1">{food.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex text-lg py-2 text-primary ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <p className="font-fira">${food.price}</p>
                </div>
                <div
                  className="bg-[#EC6083] w-full rounded-md py-2 px-2 flex items-center justify-center mb-5 cursor-pointer"
                  onClick={() =>
                    dispatch(
                      _add_to_cart(
                        food._id,
                        food.name,
                        food.foodImg[0].url,
                        food.price,
                        1
                      )
                    )
                  }
                >
                  <AiOutlineShoppingCart className="text-white text-xl font-bold" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default FoodCategory;
