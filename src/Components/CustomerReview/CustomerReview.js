import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const CustomerReview = () => {
  return (
    <div className="w-full h-80 bg-no-repeat bg-contain bg-center px-20">
      <div>
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            "@2.00": {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          
        </Swiper> */}
      </div>
    </div>
  );
};

export default CustomerReview;
