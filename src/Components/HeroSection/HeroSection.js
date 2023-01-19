import React from "react";
import Pizza from "../../Images/hero-delivery.png";
import HeroBg from "../../Images/hero-bg.jpg";
import Button from "../Common/Button";
const HeroSection = () => {
  //w-full mx-auto flex items-center justify-evenly bg-center bg-no-repeat bg-cover rounded-3xl
  //font-fira font-bold text-4xl text-white
  return (
    <section className="">
      <div
        className="flex items-center px-2 w-11/12	mx-auto rounded-3xl justify-evenly bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div>
          <h1 className="font-nunito text-base md:text-4xl text-white font-bold">
            Full in the Stomech, Good <br /> For your Health
          </h1>
          <p className="capitalize text-white my-2 text-sm md:text-base  md:my-4">
            after ordre has been paid and sent it can be counted in the systemp
          </p>
          <Button className="bg-[#F9D774] px-2 py-1 rounded-md font-fira text-sm md:text-base md:px-3">
            View Deal's
          </Button>
        </div>
        <img
          src={Pizza}
          alt=""
          className="h-[160px] md:h-[260px] animate-bounce mt-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
