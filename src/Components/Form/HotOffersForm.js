import React from "react";
import { useSelector } from "react-redux";
import Button from "../Common/Button";
import Image from "../Common/Image";
import Input from "../Common/Input";

const HotOffersForm = ({
  handleImage,
  offersValues,
  handleOfferFrom,
  handleChange,
  menu,
  offersPicture,
}) => {
  const dessert = useSelector((state) => state.dessert);
  return (
    <form
      className="shadow-sm bg-white p-3 rounded-sm"
      onSubmit={handleOfferFrom}
    >
      <Input
        placeholder="Offers Name"
        className="p-2 border border-gray rounded-md outline-none focus:border-gray w-full "
        header="Offers Name"
        type="text"
        name="name"
        onChange={handleChange}
        value={offersValues?.name}
        required={true}
      />
      <div className="grid grid-cols-2 gap-2  mt-3">
        <Input
          className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
          type="number"
          header="Offers Price"
          placeholder="Price"
          name="price"
          onChange={handleChange}
          value={offersValues?.price}
          required={true}
        />
        <div>
          <p className="my-1 font-nunito">Select Menu</p>
          <select
            className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
            name="id"
            onChange={handleChange}
            value={offersValues?.menuId}
            required
          >
            <option>Select Menu</option>
            {menu &&
              menu.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">
        <div>
          <p className="my-1 font-nunito">Signing Yes / No</p>
          <select
            className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
            name="shipping"
            onChange={handleChange}
            value={offersValues?.shipping}
            required
          >
            <option>Shipping</option>
            <option value={"yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
        </div>
        <div className="">
          <p className="my-1 font-nunito">Dessert Image</p>
          <Image handleImage={handleImage} offersPicture={offersPicture} />
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          className="bg-bgLightBlue text-white px-3 py-2 font-nunito rounded-sm"
          type="submit"
        >
          {dessert && dessert.loading ? "Loading..." : "Create Hot Offers"}
        </Button>
      </div>
    </form>
  );
};

export default HotOffersForm;
