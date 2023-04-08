import React from "react";
import "./Feature.css";
import maker from "../../assets/maker.png";
import make from "../../assets/make.png";
import paint from "../../assets/paint.png";
import chashka from "../../assets/chashka.png";
const Feature = () => {
  return (
    <div className="container_Feature">
      <div className="Feature">
        <h1 className="h_feature">Our Some Feature</h1>
      </div>
      <div className="p">
        <p className="p_feature">
          The role of a good cook ware in the preparation of a sumptuous meal
          cannot be over <br /> emphasized then one consider white bread
        </p>
      </div>
      <div className="maker">
        <img src={maker} alt="" />
        <img src={make}alt="" />
        <img src={paint} alt="" />
        <img src={chashka} alt="" />
      </div>
      <div className="make_1">
        <h1>COFFEE MAKER</h1>
        <h1>COFFEE GRINDER</h1>
        <h1>COFFEE CUP</h1>
        <h1>ESPRESSO MACHINE</h1>
      </div>
      <div className="make_2">
        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt</p>
        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt</p>
        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt</p>
        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt</p>

      </div>
    </div>
  );
};

export default Feature;
