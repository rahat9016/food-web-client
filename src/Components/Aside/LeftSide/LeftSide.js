import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SidebarAdminData, SidebarUserData } from "../../../Data/Data";
import { FiLogOut } from "react-icons/fi";
import UserIcons from "../../../Images/profile.png";
import { _logout } from "../../../Redux/Action/Auth";
const LeftSide = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="px-10 h-screen relative">
      {auth.authenticate && auth.admin === true ? (
        <div className="hidden"></div>
      ) : (
        <div className="flex flex-col justify-between items-center  w-full h-full">
          <div
            className={`w-10 h-10 bg-pink flex items-center justify-center rounded-xl shadow-md mt-10 ${
              auth.authenticate && auth.user.role === "user"
                ? "block"
                : "hidden"
            }`}
          >
            <img src={UserIcons} alt="" />
          </div>
          <div
            className={`flex flex-col gap-5 items-center justify-center text-lg ${
              auth.authenticate && auth.user.role === "user" ? "mt-0" : "mt-10"
            }`}
          >
            {SidebarUserData.length > 0
              ? SidebarUserData.map((data, index) => {
                  return (
                    <Link
                      key={index}
                      to={data.location}
                      className=" first:bg-pink flex items-center justify-center rounded-xl first:text-white w-10 h-10 bg-white shadow-md"
                    >
                      <data.icon />
                    </Link>
                  );
                })
              : null}
          </div>
          {
            <button
              className={` w-10 h-10 bg-pink text-white shadow-md flex flex-col gap-5 items-center justify-center text-lg mt-5 rounded-xl mb-2 ${
                auth.authenticate ? "block" : "hidden"
              }`}
            >
              <FiLogOut
                onClick={() => {
                  dispatch(_logout());
                }}
              />
            </button>
          }
        </div>
      )}

      {auth.authenticate && auth.admin === true ? (
        <div className="px-2 text-textLight ">
          {SidebarAdminData.length > 0
            ? SidebarAdminData.map((data, index) => {
                return (
                  <Link
                    key={index}
                    to={data.location}
                    className={`flex items-center gap-3 text-xl font-nunito hover:bg-bgLightBlue mb-2 p-2 py-2 rounded-md ${
                      window.location.pathname === data.location
                        ? "bg-bgLightBlue"
                        : ""
                    }`}
                  >
                    <data.icon />
                    <span>{data.heading}</span>
                  </Link>
                );
              })
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default LeftSide;
