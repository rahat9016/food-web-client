import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Search from "../Search/Search";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="justify-between md:justify-around h-20 flex flex-row items-center px-3 md:px-0 bg-lightWhite z-50">
      <img
        src={Logo}
        alt="Logo"
        className="w-40 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <Search />
    </div>
  );
};

export default Header;
