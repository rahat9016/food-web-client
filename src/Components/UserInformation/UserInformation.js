import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "../../Images/profile.png";
import { _logout } from "../../Redux/Action/Auth";
const UserInformation = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      {auth.authenticate ? (
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 p-2 rounded-full bg-[#D6F5FF] flex items-center justify-center">
            <img src={Profile} alt="Profile" />
          </div>
          <div>
            <h1 className="font-bold font-nunito leading-3	">
              {auth.user.firstName}
            </h1>
            <div className="flex gap-1 items-center font-nunito capitalize">
              <p className="">{auth.user.role}</p>
              <span className="text-gray text-xs">or</span>{" "}
              <p className="cursor-pointer" onClick={() => dispatch(_logout())}>
                Logout
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 p-2 rounded-full bg-primary  flex items-center justify-center">
            <AiOutlineUser className="text-6xl text-[#fff]" />
          </div>
          <div>
            <h1 className="font-bold font-nunito leading-3	">Account</h1>
            <div className="flex ">
              <Link
                to="/signup"
                className="hover:text-primary transition duration-300"
              >
                Signup
              </Link>
              <span className="mx-1">or</span>
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
