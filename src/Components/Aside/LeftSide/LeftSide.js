import React from "react";
import { SidebarUserData } from "../../../Data/Data";
const LeftSide = () => {
  const admin = "user";
  return (
    <div className="flex flex-col content-between mt-10">
      {admin === "admin"
        ? ""
        : SidebarUserData.map((item) => (
            <div
              key={item.id}
              className=" w-10 h-10 first:bg-primary first:text-white text-secondary rounded-full flex justify-center items-center mb-4"
            >
              <item.icon className="text-2xl" />
            </div>
          ))}
    </div>
  );
};

export default LeftSide;
