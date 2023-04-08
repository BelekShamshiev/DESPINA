import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Despina.css";
import { Pagination } from "swiper";
import swiper from "../../assets/swiper.jpg";
const Despina = () => {
  return (
    <div className="container_Despina">
      <div className="despina">
        <h1 className="h_despina">#coffeedespina</h1>
      </div>
      <div className="p_despina">
        <p className="p_despina_p">
          Enjoyed your stay at Despina? Share your moments with us. Follow us on
          Instagram and use
        </p>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
            <img className="test" src={swiper} alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={swiper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={swiper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={swiper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={swiper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={swiper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={swiper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={swiper} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Despina;
