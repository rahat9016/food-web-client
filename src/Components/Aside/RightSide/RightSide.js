import React from "react";
import { GrNotification } from "react-icons/gr";
import UserInformation from "../../UserInformation/UserInformation";
const RightSide = () => {
  return (
    <div className="px-10 ">
      <div className="flex justify-end items-center gap-3 mt-10">
        <div className="relative w-12 h-12 bg-lightWhite flex items-center justify-center rounded-full">
          <GrNotification className="text-xl text-secondary relative" />
          <div className="bg-primary w-4 h-4 p-2 rounded-full flex items-center justify-center text-white absolute text-sm top-2 right-2">
            <p>5</p>
          </div>
        </div>
        <UserInformation />
      </div>
    </div>
  );
};

export default RightSide;
