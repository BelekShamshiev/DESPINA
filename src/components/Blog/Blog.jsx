import ren from "../../assets/ren.png"
import "./Blog.css";
import { Card } from 'antd';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
const { Meta } = Card;
// import May from "../../assets/May.png"
// import May_2 from "../../assets/May_2.png"
// import June from "../../assets/June.png"
const Blog = () => {
  return (
    <div className="container_Blog">
      <div className="Blog_h">
        <h1>Feature Blog</h1>
      </div>
      <div className="Blog_p">
        <p>Read Latest Delicious Posts And News</p>
      </div>
 

  

<Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "chort",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://img3.stockfresh.com/files/g/grafvision/m/58/6429830_stock-photo-coffee.jpg" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://i007.fotocdn.net/s115/7e62c57271e786bb/public_pin_m/2622438362.jpg" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://s1.1zoom.me/prev/596/Coffee_Many_coffee_Grain_Word_Lettering_English_595326_600x400.jpg" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://avatars.mds.yandex.net/i?id=b65eb84901063688232cab43c21b793bb2d03a08-7178390-images-thumbs&n=13" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://avatars.mds.yandex.net/i?id=33478a6b5cd5dc84c1a06ff3195b803a-5238844-images-thumbs&n=13" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://avatars.mds.yandex.net/i?id=c68816edff0216679454dddbe6275772eeb2ef64-5231013-images-thumbs&n=13" />}
  >
    <Meta title="Make it Simple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…" />
  </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blog;
