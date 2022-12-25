import React from "react";
import Pizza from "../../Images/pizza.png";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
const FoodCard = () => {
  return (
    <div className={` px-3 py-3 rounded-md`}>
      <img src={Pizza} alt="" className="w-44 block mr-auto ml-auto" />
      <h1 className="font-bold my-1">Mushroom Pizza</h1>
      <div className="flex  text-primary my-1">
        {" "}
        <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar />
        <AiOutlineStar />
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <BsCurrencyDollar className="text-sm self-end text-primary" />
          <span className="font-semibold font-nunito">7.89</span>
        </div>
        <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full">
          <FiPlus />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
