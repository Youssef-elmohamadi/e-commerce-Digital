import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
const Slider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={5}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
