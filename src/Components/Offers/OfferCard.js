import React from "react";
import { FiPlus } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { _add_to_cart } from "../../Redux/Action/Cart";
const OfferCard = ({ offer }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-72 h-[86px] bg-white relative shadow-md rounded-lg ">
      <div className="w-24 h-24 bg-[#d8ffcdbb] rounded-full absolute top-[-30%] left-[-5%] flex items-center justify-center p-1 shadow-sm border-4 border-white ">
        <img src={offer.offerImg.url} alt="" className="w-24 " />
      </div>
      <div className="ml-24 mt-2">
        <h1 className="font-bold leading-[18px]">{offer.name}</h1>
        <p className="text-lightGreen font-nunito">${offer.price}</p>
        <div className="flex ">
          <AiFillStar className="text-xs text-primary" />
          <AiFillStar className="text-xs text-primary" />
          <AiFillStar className="text-xs text-primary" />
          <AiFillStar className="text-xs text-primary" />
          <AiOutlineStar className="text-xs text-primary" />
        </div>
      </div>
      <div
        className="w-8 h-8 bg-lightGreen absolute top-0 right-0 flex items-center justify-center text-white rounded-lg cursor-pointer"
        onClick={() =>
          dispatch(
            _add_to_cart(
              offer._id,
              offer.name,
              offer.offerImg.url,
              offer.price,
              1,
              offer.type
            )
          )
        }
      >
        <FiPlus />
      </div>
    </div>
  );
};

export default OfferCard;
