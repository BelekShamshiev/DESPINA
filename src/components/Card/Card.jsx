import React from "react";
import "./Card.css";
import { Button, Space } from "antd";
import girl from "../../assets/girl.png";
import machin from "../../assets/machin.png";
import spon from "../../assets/spon.png";
const Card = () => {
  return (
    <div className="container_Card">
      <div className="card">
        <div className="flavor">
          <img src={girl} alt="" />
        
            <div className="off">
          <img src={spon} alt="" />
          <div className="twinty">
            <h1>This friday  25%  off</h1>
          </div>
          <img className="creat" src={machin} alt="" />
          <div className="enjoy">
            <h1 className="enjo">ENJOYING GREAT</h1>
            <Button ghost>Read More</Button>
          </div>
        </div>
        <div className="creat">

        </div>
      </div>
        <div className="kera">
          <h1>New Coffee Flavours</h1>
          <Button ghost>Read More</Button>
          </div>
      </div>
     
    </div>
  );
};

export default Card;
