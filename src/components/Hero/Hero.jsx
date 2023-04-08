import React from "react";
import s from "./Hero.module.css";
import coffe from "../../assets/coffee.png";
import milk from "../../assets/milk.png";
import coctail from "../../assets/cocktail.png";
import bewerages from "../../assets/bewerages.png";
import tea from "../../assets/tea.png";
import cake from "../../assets/cake.png";
import bob from "../../assets/bob.png";
import drink from "../../assets/drink.png";
const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.low_container}>
        <div className={s.low}>
          <img className="coffe" src={coffe} alt="coffe"></img>
          <p>Coffe</p>
          <img src={milk} alt="milk" /> <p>Milk</p>
          <img src={coctail} alt="coctail" /> <p>Coctail</p>
          <img src={bewerages} alt="bewerages" /> <p>Bewerages</p>
          <img src={tea} alt="tea" /> <p>Tea</p>
          <img src={cake} alt="cake" /> <p>Cake</p>

        </div>
      </div>
      <div className={s.best}>
        <div className={s.line}></div>
        <img className={s.bob} src={bob} alt="" />
        <hr className={s.line_1} />
        <div className={s.dev}>
          <h1 className={s.h1_best}>BEST QUALITY</h1>
          <p className={s.p_best}>ESTABLISHED IN 1991</p>
          <h1 className={s.h1_special}>SPECIAL COFFEE</h1>
          <p className={s.p_special}>BEANS</p>
        </div>
        <div className={s.main}></div>
        <hr />
        <img className={s.drink} src={drink} alt="" />
      </div>
    </div>
  );
};

export default Hero;
