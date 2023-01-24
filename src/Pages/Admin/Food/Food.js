import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../Components/Admin/Sidebar";
import Form from "../../../Components/Form/FoodForm";
import Layout from "../../../Components/Layout/Layout";
import { _food } from "../../../Redux/Action/Food";
const value = {
  name: "",
  price: 0,
  quantity: 0,
  description: "",
  id: "",
  shipping: "",
};
const Food = () => {
  const [foodValues, setFoodValues] = useState(value);
  const [foodPictures, setFoodPictures] = useState([]);
  const { menu } = useSelector((state) => state.menu);
  const { foods } = useSelector((state) => state.foods);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFoodValues({ ...foodValues, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setFoodPictures([...foodPictures, e.target.files[0]]);
  };
  const handleFoodFrom = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", foodValues.name);
    form.append("price", foodValues.price);
    form.append("quantity", foodValues.quantity);
    form.append("description", foodValues.description);
    form.append("menuId", foodValues.id);
    form.append("shipping", foodValues.shipping);
    for (let img of foodPictures) {
      form.append("foodImages", img);
    }
    dispatch(_food(form));
    foodValues.name = "";
    foodValues.price = 0;
    foodValues.quantity = 0;
    foodValues.description = "";
    foodValues.shipping = "";
    foodValues.menuId = "";
    setFoodPictures([]);
  };
  return (
    <Sidebar>
      <div className="px-10">
        <h1 className="text-3xl font-bold font-nunito mt-10 mb-6">Food</h1>
        <Form
          handleChange={handleChange}
          foodValues={foodValues}
          handleFoodFrom={handleFoodFrom}
          handleImage={handleImage}
          menu={menu}
        />
        <div>
          <h1 className="text-3xl font-bold font-nunito mt-10 mb-6">
            All Foods
          </h1>
          <div>
            {foods.length > 0
              ? foods.map((food) => (
                  <div
                    key={food._id}
                    className="flex items-center justify-between gap-3 bg-white shadow-sm mb-1 px-5 rounded-md"
                  >
                    <img
                      src={food.foodImg[0].url}
                      alt=""
                      className="w-20 h-20 "
                    />
                    <h1>{food.name}</h1>
                    <p>${food.price}</p>
                    <p>{food.menuId.title}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-rose-300 text-rose-500 flex items-center justify-center rounded-lg">
                        <AiFillDelete />
                      </div>
                      <div className="w-8 h-8 bg-green-300 text-green-500 flex items-center justify-center rounded-lg">
                        <AiFillEdit />
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Food;
