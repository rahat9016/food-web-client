import React from "react";
import { CategoryData } from "../../Data/Data";
import CategoryCard from "../CategoryCard/CategoryCard";
import FoodCard from "../FoodCard/FoodCard";

const MenuCategory = () => {
  return (
    <div className="md:px-20 ">
      <h1 className="md:text-3xl font-manrope">Menu Category</h1>
      <div className="flex gap-2 mt-4 ml-2">
        {CategoryData.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
      <div className="grid grid-cols-5 gap-3 mt-4 ml-2">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default MenuCategory;
