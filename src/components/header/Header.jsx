import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/Prohile.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Shubham Kumar</h1>
        <h5 className="text-light">Data Analyst | Python Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="ademir">
          <img src={header_picture} alt="Shubham Kumar" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
