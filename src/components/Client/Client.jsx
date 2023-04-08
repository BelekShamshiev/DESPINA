import "./Client.css";
import down from "../../assets/down.png"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";


// import required modules
import { Scrollbar } from "swiper";
const Client = () => {

  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="container_client">
      <div className="Client">
        <h1>What Clients Say</h1>
      </div>
      <div className="p_client">
        <p>1500+ Satisfied Clients</p>
      </div>
      {/* <div className="img_client">
        <img src={down} alt="" />
      </div>
      <div className="Alice">
        <h1>Alice Williams</h1>
      </div>
      <div className="Citchen">
        <p>Kitchen Manager</p>
      </div>
      <div className="Success">
        <p>Success isn’t really that difficult. There is a significant portion of the <br /> population here in North America,  that actually want and need  success <br /> really no magic to be hard.</p>
      </div> */}

<Swiper 
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="belek"
      >
        <SwiperSlide>
        <div className="img_client">
        <img src={down} alt="" />
      </div>
      <div className="Alice">
        <h1>Alice Williams</h1>
      </div>
      <div className="Citchen">
        <p>Kitchen Manager</p>
      </div>
      <div className="Success">
        <p>Success isn’t really that difficult. There is a significant portion of the <br /> population here in North America,  that actually want and need  success <br /> really no magic to be hard.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img_client">
        <img src={down} alt="" />
      </div>
      <div className="Alice">
        <h1>Alice Williams</h1>
      </div>
      <div className="Citchen">
        <p>Kitchen Manager</p>
      </div>
      <div className="Success">
        <p>Success isn’t really that difficult. There is a significant portion of the <br /> population here in North America,  that actually want and need  success <br /> really no magic to be hard.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img_client">
        <img src={down} alt="" />
      </div>
      <div className="Alice">
        <h1>Alice Williams</h1>
      </div>
      <div className="Citchen">
        <p>Kitchen Manager</p>
      </div>
      <div className="Success">
        <p>Success isn’t really that difficult. There is a significant portion of the <br /> population here in North America,  that actually want and need  success <br /> really no magic to be hard.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide> <div className="img_client">
        <img src={down} alt="" />
      </div>
      <div className="Alice">
        <h1>Alice Williams</h1>
      </div>
      <div className="Citchen">
        <p>Kitchen Manager</p>
      </div>
      <div className="Success">
        <p>Success isn’t really that difficult. There is a significant portion of the <br /> population here in North America,  that actually want and need  success <br /> really no magic to be hard.</p>
      </div></SwiperSlide>
 
      </Swiper>
    </div>
  );
};

export default Client;
