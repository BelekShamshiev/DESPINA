import React from "react";
import "../Header/Header.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import basket from "../../assets/basket.png";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header_logo">
          <img src={logo} alt="" />
        </div>
        <div className="header_p">
          <p>HOME</p>
          <p>MENU</p>
          <p>SHOP</p>
          <p>PAGES</p>
          <p>BLOCK</p>
          <p>CONTACT</p>
        </div>
        <div className="dop">
        <div className="phone">
          <div className="phone_img">
            <img src={phone} alt="" />
            <p>123-456-789</p>
          </div>
          <div className="basket">
            <img src={basket} alt="" />
            <p>0- $0.00</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

