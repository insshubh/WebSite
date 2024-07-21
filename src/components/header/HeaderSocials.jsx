import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsX } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
    <a target="_blank" href="https://www.linkedin.com/in/insshubh/">
      <BsLinkedin style={{ fontSize: "1.5rem" }} /> 
    </a>
    <a target="_blank" href="https://github.com/insshubh">
      <FaGithub style={{ fontSize: "1.5rem" }} /> 
    </a>
    <a target="_blank" href="https://x.com/insshubh">
      <BsX style={{ fontSize: "1.5rem" }} /> 
    </a>
  </div>
  );
};

export default HeaderSocials;
