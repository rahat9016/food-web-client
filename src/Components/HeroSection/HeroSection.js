import React from "react";
import Button from "../Button/Button";
import Pizza from "../../Images/pizza.png";
import Salad from "../../Images/salat.png";
const HeroSection = () => {
  return (
    <section className="w-full md:h-[60vh]   flex flex-col-reverse md:flex-row items-center px-2 md:px-20">
      <div className="">
        <h1 className="text-3xl sm:text-xl md:text-5xl font-bold font-nunito mb-2 ">
          Todays' Special
        </h1>
        <h2 className="text-3xl sm:text-xl md:text-5xl font-nunito mb-8">
          Fresh food menu
        </h2>
        <p className="text-justify mb-8">
          Succulent pieces of chicken cooked with fajita spices,topped with{" "}
          green capsicum,fresh onions,black olives,cilantro and fresh mozarella
          cheese
        </p>
        <Button className="bg-primary text-white px-6 py-2 rounded-r-full rounded-b-full transition delay-150 duration-300 ease-in-out">
          Order Now
        </Button>
      </div>
      <div className="">
        <img
          src={Pizza}
          alt=""
          className="w-full md:w-[80%] block mr-auto ml-auto "
        />
      </div>
    </section>
  );
};

export default HeroSection;
