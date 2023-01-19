import React from "react";
import { useSelector } from "react-redux";
import OfferCard from "./OfferCard";

const Offers = () => {
  const { offers } = useSelector((state) => state.offers);
  return (
    <div className="px-20 mt-10">
      <h1 className="font-bold font-nunito text-4xl mb-10">Hot Offers</h1>
      <div className="grid grid-cols-4 justify-center">
        {offers && offers.length > 0
          ? offers.map((offer) => <OfferCard key={offer._id} offer={offer} />)
          : null}
      </div>
    </div>
  );
};

export default Offers;
