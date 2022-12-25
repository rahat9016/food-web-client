import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Profile from "../../Images/profile.png";
const UserInformation = () => {
  const authenticate = false;
  return (
    <div>
      {authenticate ? (
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 p-2 rounded-full bg-[#D6F5FF] flex items-center justify-center">
            <img src={Profile} alt="Profile" />
          </div>
          <div>
            <h1 className="font-bold font-nunito leading-3	">Minhajur</h1>
            <p className="font-nunito">User</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 p-2 rounded-full bg-[#D6F5FF] flex items-center justify-center">
            <BiUserCircle className="text-3xl text-[#333]" />
          </div>
          <div>
            <h1 className="font-bold font-nunito leading-3	">Account</h1>
            <div className="flex gap-2">
              <Link
                to="/signup"
                className="hover:text-primary transition duration-300"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="hover:text-primary transition duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInformation;
