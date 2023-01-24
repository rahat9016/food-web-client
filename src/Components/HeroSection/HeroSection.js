import React from "react";
import Pizza from "../../Images/hero-delivery.png";
import HeroBg from "../../Images/hero-bg.jpg";
import Button from "../Common/Button";
const HeroSection = () => {
  return (
    <section>
      <div
        className="flex items-center px-2 py-3 lg:px-20 w-11/12	mx-auto rounded-3xl justify-evenly bg-center bg-no-repeat bg-cover mt-0 md:mt-10"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div>
          <h1 className="font-nunito text-base md:text-4xl text-white font-bold">
            Full in the Stomech, Good <br /> For your Health
          </h1>
          <p className="capitalize text-white my-1 md:my-4 text-sm md:text-base  ">
            after ordre has been paid and sent it can be counted in the systemp
          </p>
          <Button className="bg-[#F9D774] px-2 py-1 rounded-md font-fira text-sm md:text-base md:px-3">
            View Deal's
          </Button>
        </div>
        <img
          src={Pizza}
          alt=""
          className="h-[120px] md:h-[160px]  lg:h-[260px] animate-bounce mt-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
