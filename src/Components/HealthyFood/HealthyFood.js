import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import HealthyFoodImg from "../../Images/HealthyFood.png";
import Button from "../Common/Button";
const HealthyFood = () => {
  return (
    <div className="px-6 lg:px-20 my-20 ">
      <div className=" md:grid md:grid-cols-2 items-center">
        <img
          src={HealthyFoodImg}
          alt="Healthy Food"
          className="w-8/12 md:w-8/12 lg:w-10/12 mr-auto ml-auto"
        />
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-5xl  font-bold font-fira">
            Fresh, Healthy, Organic, Delicious Fruits
          </h1>
          <p className="text-justify mt-2 text-sm md:text-base">
            We’ve grown up watching our mums effortlessly pick fresh, delicious
            vegetables and fruits for us. At times, when mum wasn’t around,
            we’ve removed wilted greens from the fridge and wondered where it
            all went wrong.
          </p>
          <div className="flex text-primary text-lg mt-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <Button className="bg-lightGreen text-white px-4 py-2 rounded-sm mt-2">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HealthyFood;
