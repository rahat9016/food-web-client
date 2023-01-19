import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const MenuCard = ({ menu }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-primary px-3 py-4 rounded-lg text-white text-center w-20 shadow-sm hover:shadow-md cursor-pointer"
      key={menu._id}
      onClick={() => navigate(`/food_category?id=${menu._id}`)}
    >
      <div className="w-12 p-2 h-12 flex items-center justify-center bg-white rounded-full  mr-auto ml-auto ">
        <img src={menu?.menuImage?.url} alt={menu.title} className="w-10" />
      </div>
      <h1 className="mt-2 h-10">{menu.title}</h1>
      <div className="w-4 h-4 bg-white text-primary rounded-full mr-auto ml-auto mt-2">
        <HiOutlineChevronRight />
      </div>
    </div>
  );
};

export default MenuCard;
