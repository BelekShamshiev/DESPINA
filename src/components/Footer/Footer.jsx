import React from "react";
import logo from "../../assets/logo.png";
import video from "../../assets/video.png"
import twiter from "../../assets/Twitter.png"
import insta from "../../assets/insta.png"
import pinterst from "../../assets/pinterst.png"
import google from "../../assets/google.png"
import Facebook from "../../assets/Facebook.png"
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container_Footer">
      <div className="Despina">
        <img src={logo} alt="" />
        <h1>Contact</h1>
        <h1>Opening Hour</h1>
        <h1>Despina Video</h1>
      </div>
      <div className="Despina_2">
        <p>
          We have a hankering for some really in good <br /> melt in a mouth
          variety. Floury is the best <br /> choice to taste food and dessert.
        </p>
        <p>
          329 Queensberry Street, North Melbourne <br /> VIC 3051, Australia.{" "}
          <br /> 123 456 7890 <br /> support@despina.com
        </p>
        <p>
          Monday - Friday: ........6am - 9pm <br />
          Saturday: ........6am - 10pm <br />
          Sunday: ........Closed <br />
          *Close on special days
        </p>
        <img className="video" src={video} alt="" />

      </div>
      <div className=" Rectangle">
        <img src={google} alt="" />
        <img src={Facebook} alt="" />
        <img src={twiter} alt="" />
        <img src={insta} alt="" />
        <img src={pinterst} alt="" />
      </div>
      <div className="Ren_p">
        <p>Copyright © 2017 Hire WordPress Developer. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
