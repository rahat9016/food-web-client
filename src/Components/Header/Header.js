import React from "react";
import Logo from "../../Images/logo.png";
import Search from "../Search/Search";
const Header = () => {
  return (
    <div className="justify-between md:justify-around h-20 flex flex-row items-center px-3 md:px-0  ">
      <img src={Logo} alt="Logo" className="w-40" />
      <Search />
    </div>
  );
};

export default Header;
