import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { _add_to_cart } from "../../Redux/Action/Cart";
import { _get_foods_by_sort } from "../../Redux/Action/Food";
const TopSelling = () => {
  const foods = useSelector((state) => state.foods.soldFoods);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(_get_foods_by_sort("sold", "desc"));
  }, [dispatch]);
  return (
    <div className="px-2 lg:px-20">
      <h1 className="font-bold font-nunito text-4xl mb-10">
        Top Selling Food's
      </h1>
      <div className="p-2 bg-white  shadow-lg my-4 rounded-lg">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {foods && foods.length > 0
            ? foods.map((food, index) => {
                return (
                  <div key={index} className="">
                    <SwiperSlide>
                      <div className="bg-[#F8F7F5] px-10 py-2" key={index}>
                        <img
                          src={food.foodImg[0].url}
                          alt=""
                          className=" h-32 mr-auto ml-auto"
                        />{" "}
                        <div>
                          <h1 className="text-center text-xl font-fira w-full h-11">
                            {food.name}
                          </h1>
                          <p className="text-center p-1">{food.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex text-lg py-2 text-primary ">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiOutlineStar />
                            </div>
                            <p className="font-fira">${food.price}</p>
                          </div>
                          <div
                            className="bg-[#EC6083] w-full rounded-md py-2 px-2 flex items-center justify-center mb-5 cursor-pointer"
                            onClick={() =>
                              dispatch(
                                _add_to_cart(
                                  food._id,
                                  food.name,
                                  food.foodImg[0].url,
                                  food.price,
                                  1
                                )
                              )
                            }
                          >
                            <AiOutlineShoppingCart className="text-white text-xl font-bold" />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })
            : null}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSelling;
