import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// import required modules
import { EffectCreative } from "swiper";
import "./Best.css"
import rentangle from "../../assets/rectangle.png"
import best from '../../assets/capuchino.png'

const Best = () => {
    return (
        <div className='container_Best'>
         <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >

        <div className="">
          {/* <img src= alt="" /> */}
        </div>
        <SwiperSlide>
            <div className="rentagle_test_one">
            <img src={rentangle} alt="rentagle_test_one" />
            
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="rentagle_test_second">
            <img src={best} alt="rentagle_test_second" />
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Best;