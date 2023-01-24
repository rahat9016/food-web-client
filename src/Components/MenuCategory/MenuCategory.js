import React from "react";
import { useSelector } from "react-redux";
import MenuCard from "../CategoryCard/MenuCard";
const MenuCategory = () => {
  const menus = useSelector((state) => state.menu.menu);

  return (
    <div className="px-2 lg:px-20 mt-10">
      <div className="flex gap-2 mt-4 ml-2 overflow-x-scroll scrollbar-hide">
        {menus && menus.length > 0
          ? menus.map((menu, index) => <MenuCard key={index} menu={menu} />)
          : null}
      </div>
    </div>
  );
};

export default MenuCategory;
