import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { colorPicker } from "../../Data/Colors";
import Button from "../Common/Button";
import FoodCard from "../FoodCard/FoodCard";

const Popular = () => {
  const foods = useSelector((state) => state.foods.foods);

  return (
    <div className="px-4 lg:px-20">
      <div className="flex justify-between">
        <h1 className="font-bold font-nunito text-xl md:text-4xl my-8">
          Popular Dishes
        </h1>
        <div className="flex items-center">
          <Button className="font-nunito font-bold mr-3 text-sm">
            View More
          </Button>
          <span className="w-6 h-6 md:h-8 md:w-8 bg-[#F5F6F7] flex items-center justify-center p-1 rounded-lg">
            <HiOutlineArrowRight className="text-2xl" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-4 pb-10">
        {foods && foods.length > 0
          ? foods
              .slice(0, 6)
              .map((food) => (
                <FoodCard
                  key={food._id}
                  food={food}
                  colorPicker={colorPicker}
                />
              ))
          : null}
      </div>
    </div>
  );
};

export default Popular;
