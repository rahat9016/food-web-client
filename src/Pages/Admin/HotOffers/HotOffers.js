import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotOffersForm from "../../../Components/Form/HotOffersForm";
import Layout from "../../../Components/Layout/Layout";
import { _offers } from "../../../Redux/Action/Offers";
const value = {
  name: "",
  price: null,
  id: "",
  shipping: "",
};
const HotOffers = () => {
  const [offersValues, setOffersValues] = useState(value);
  const [offersPicture, setOffersPicture] = useState(undefined);
  const { menu } = useSelector((state) => state.menu);

  const dispatch = useDispatch();
  const handleOfferFrom = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", offersValues.name);
    form.append("price", offersValues.price);
    form.append("menuId", offersValues.id);
    form.append("shipping", offersValues.shipping);
    form.append("offerImg", offersPicture);
    if (
      offersValues.name &&
      offersValues.price &&
      offersValues.shipping &&
      offersValues.id
    ) {
      dispatch(_offers(form));
    }
  };
  const handleChange = (e) => {
    setOffersValues({ ...offersValues, [e.target.name]: e.target.value });
  };
  // console.log(offersValues);
  const handleImage = (e) => {
    setOffersPicture(e.target.files[0]);
  };
  return (
    <Layout admin>
      <div className="px-10">
        <HotOffersForm
          handleChange={handleChange}
          offersValues={offersValues}
          handleOfferFrom={handleOfferFrom}
          handleImage={handleImage}
          offersPicture={offersPicture}
          menu={menu}
        />
      </div>
    </Layout>
  );
};

export default HotOffers;
