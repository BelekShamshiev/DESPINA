import coffe_cup from "../../assets/cacao_cup.png"
import cacao_cup from "../../assets/coffe_cup.png"
import Paber_bag from "../../assets/paber_bag.png"
import paper from "../../assets/paper.png"
import star from "../../assets/star.jpg"
import neskafe from "../../assets/neskafe.jpg"
import jokey from "../../assets/jokey.jpg"
import cat_coffe from "../../assets/cat_coffe.jpg"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Build.css"
const Build = () => {
    return (
        <div className='container_Build'>
        <div className='build_title'>
            <h1>Coffee Build Your Base</h1>
            <p>What Happens Here</p>
        </div>
        <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.1,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="sliderDespina"
      >
        <SwiperSlide>
            <img className="test" src={cat_coffe} alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={cat_coffe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className="test" src={cat_coffe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={cat_coffe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={cat_coffe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="test" src={cat_coffe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className="test" src={cat_coffe} alt="" />
        </SwiperSlide>

      </Swiper>            
        </div>
        
    );
};

export default Build;