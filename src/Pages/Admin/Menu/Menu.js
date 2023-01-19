import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Components/Common/Button";
import Image from "../../../Components/Common/Image";
import Input from "../../../Components/Common/Input";
import Layout from "../../../Components/Layout/Layout";
import { _delete_menu, _get_menu, _menu } from "../../../Redux/Action/Menu";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const message = menu.message;
  const [menuValue, setMenuValue] = useState("");
  const [menuId, setMenuId] = useState("");
  const [menuImg, setMenuImg] = useState(undefined);
  const [showDeleteModel, setShowDeleteModel] = useState(false);

  const handleMenuForm = (e) => {
    // Create Menu
    e.preventDefault();
    const form = new FormData();
    form.append("title", menuValue);
    form.append("menuImage", menuImg);
    if (menuValue && menuImg) {
      dispatch(_menu(form));
    }
    dispatch(_get_menu());
    setMenuValue("");
    setMenuImg(undefined);
  };
  // Handle Image
  const handleImage = (e) => {
    setMenuImg(e.target.files[0]);
  };

  //Handle Delete Button
  const handleShowDeleteModal = (id) => {
    setShowDeleteModel(true);
    setMenuId(id);
  };
  const handleDelete = () => {
    if (menuId) {
      dispatch(_delete_menu(menuId));
      dispatch(_get_menu());
      setShowDeleteModel(false);
    }
  };

  return (
    <Layout admin>
      <div className="px-10 ">
        <h1 className="text-3xl font-bold font-nunito mt-10 mb-6">
          Menu Category
        </h1>
        <div>
          <form
            className="shadow-sm bg-white p-3 rounded-sm"
            onSubmit={handleMenuForm}
          >
            <Input
              placeholder="Menu Name"
              className="p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 w-full"
              onChange={(e) => setMenuValue(e.target.value)}
              value={menuValue}
            />

            <Image handleImage={handleImage} />
            <div
              className={
                message === "Already Created"
                  ? "w-full bg-rose-300 text-center py-1 rounded-md mb-2"
                  : "hidden"
              }
            >
              <p
                className={`text-rose-600 my-1 ${
                  message === "Already Created" ? "block" : "hidden"
                }`}
              >
                {message}!
              </p>
            </div>
            <div className="flex  justify-end">
              <Button
                type="submit"
                className="px-2 py-3 bg-[#f799a3] font-nunito rounded-md text-white"
              >
                Create Menu
              </Button>
            </div>
          </form>
        </div>
        <div className="mt-10 ">
          <h1 className="text-3xl font-bold font-nunito mt-10 mb-6">
            All Menus
          </h1>
          <div
            className={`absolute w-[400px] p-4 z-50 left-1/2 top-1/2 bg-white shadow-lg -translate-x-1/2 -translate-y-1/2 rounded-sm ${
              showDeleteModel ? "block" : "hidden"
            }`}
          >
            <h1 className="font-bold pb-2">Do you want to delete?</h1>
            <div className="flex gap-1 justify-end">
              <Button
                className="text-green-500 bg-green-200 font-bold font-nunito px-3 py-1 rounded-sm"
                onClick={() => handleDelete()}
              >
                Yes
              </Button>
              <Button
                className="text-rose-500 bg-rose-200 font-bold font-nunito px-3 py-1 rounded-sm"
                onClick={() => {
                  setShowDeleteModel(false);
                  setMenuId("");
                }}
              >
                No
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {menu && menu.menu.length > 0 ? (
              menu.menu.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="bg-white shadow-sm hover:shadow-md rounded-md py-5 px-2 relative"
                  >
                    <img
                      src={item.menuImage.url}
                      alt=""
                      className="w-[40%] mr-auto ml-auto block"
                    />
                    <div className="text-xl px-2 py-3 bg-white absolute top-0 right-0 ">
                      <AiFillDelete
                        className="text-rose-400 cursor-pointer"
                        onClick={() => handleShowDeleteModal(item._id)}
                      />
                      <BiEdit className="text-green-500 cursor-pointer" />
                    </div>
                    <h1 className="text-2xl font-bold font-nunito">
                      {item.title}
                    </h1>
                  </div>
                );
              })
            ) : (
              <div>
                <h1>Not Found 404</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
