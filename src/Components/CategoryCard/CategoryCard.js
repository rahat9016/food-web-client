import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
const CategoryCard = ({ category }) => {
  return (
    <div
      className="bg-primary p-2 rounded-lg text-white text-center w-20 shadow-md"
      key={category.id}
    >
      <div className="w-12 p-2 h-12 flex items-center justify-center bg-white rounded-full  mr-auto ml-auto">
        <img src={category.icon} alt={category.title} className="w-10" />
      </div>
      <h1 className="mt-2">{category.title}</h1>
      <div className="w-4 h-4 bg-white text-primary rounded-full mr-auto ml-auto mt-2">
        <HiOutlineChevronRight />
      </div>
    </div>
  );
};

export default CategoryCard;
