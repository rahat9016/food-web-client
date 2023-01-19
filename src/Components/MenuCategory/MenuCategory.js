import React from "react";
import { useSelector } from "react-redux";
import MenuCard from "../CategoryCard/MenuCard";
const MenuCategory = () => {
  const menus = useSelector((state) => state.menu.menu);

  return (
    <div className="md:px-20 ">
      <div className="flex gap-2 mt-4 ml-2">
        {menus && menus.length > 0
          ? menus.map((menu, index) => <MenuCard key={index} menu={menu} />)
          : null}
      </div>
    </div>
  );
};

export default MenuCategory;
