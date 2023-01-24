import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Search from "../Search/Search";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { SidebarUserData } from "../../Data/Data";
import { FiLogOut } from "react-icons/fi";
import { _logout } from "../../Redux/Action/Auth";
import { useDispatch, useSelector } from "react-redux";
import RightSide from "../Aside/RightSide/RightSide";
const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <div className="justify-between md:justify-around h-20 flex flex-row items-center px-4  bg-lightWhite z-50">
        {menuOpen ? (
          <MdClose
            className="text-2xl lg:hidden"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        ) : (
          <RiMenu4Line
            className="text-2xl lg:hidden"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        )}
        <img
          src={Logo}
          alt="Logo"
          className="w-24 lg:w-40 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <Search />
        <AiOutlineShoppingCart
          className="text-2xl lg:hidden"
          onClick={() => setCartOpen(!cartOpen)}
        />
      </div>
      <div
        className={`lg:hidden absolute top-[80px] z-50 w-full bg-white shadow-sm duration-500 ${
          menuOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="p-2">
          {SidebarUserData.length > 0
            ? SidebarUserData.map((data, index) => {
                return (
                  <Link
                    key={index}
                    to={data.location}
                    className=" flex items-center gap-2 mb-2 text-lg"
                  >
                    <data.icon />
                    <span>{data.heading}</span>
                  </Link>
                );
              })
            : null}
          <button
            className={` w-full h-10  bg-pink text-white shadow-md flex gap-1 items-center justify-center text-lg mt-5 rounded-xl mb-2 ${
              auth.authenticate ? "block" : "hidden"
            }`}
          >
            <FiLogOut
              onClick={() => {
                dispatch(_logout());
              }}
            />
            Logout
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden absolute z-50 w-full top-[80px] bg-white shadow-sm duration-500 ${
          cartOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <RightSide size="h-full" />
      </div>
    </>
  );
};

export default Header;
