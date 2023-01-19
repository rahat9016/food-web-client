import React from "react";
import Button from "../Common/Button";
import Image from "../Common/Image";
import Input from "../Common/Input";

const FoodForm = ({
  handleImage,
  foodValues,
  handleFoodFrom,
  handleChange,
  menu,
}) => {
  return (
    <form
      className="shadow-sm bg-white p-3 rounded-sm"
      onSubmit={handleFoodFrom}
    >
      <Input
        placeholder="Food Name"
        className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
        header="Food Name"
        type="text"
        name="name"
        onChange={handleChange}
        value={foodValues?.name}
      />
      <div className="grid grid-cols-2 gap-2  mt-3">
        <Input
          placeholder="Quantity"
          className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
          type="number"
          header="Food Quantity"
          name="quantity"
          onChange={handleChange}
          value={foodValues.quantity}
        />
        <Input
          className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
          type="number"
          header="Food Price"
          placeholder="Price"
          name="price"
          onChange={handleChange}
          value={foodValues?.price}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">
        <div>
          <p className="my-1 font-nunito">Select Menu</p>
          <select
            className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
            name="id"
            onChange={handleChange}
            value={foodValues?.menuId}
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
        <div>
          <p className="my-1 font-nunito">Signing Yes / No</p>
          <select
            className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
            name="shipping"
            onChange={handleChange}
            value={foodValues?.shipping}
          >
            <option>Shipping</option>
            <option value={"yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-3 gap-2">
        <div>
          <p className="my-1 font-nunito">Food Description</p>
          <textarea
            placeholder="Write food description"
            name="description"
            className="p-2 border border-gray rounded-md outline-none focus:border-gray  w-full"
            onChange={handleChange}
            value={foodValues?.description}
          ></textarea>
        </div>
        <div className="">
          <p className="my-1 font-nunito">Food Image's</p>
          <Image handleImage={handleImage} multiple />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          className="bg-bgLightBlue text-white px-3 py-2 font-nunito rounded-sm"
          type="submit"
        >
          Create Food
        </Button>
      </div>
    </form>
  );
};

export default FoodForm;
