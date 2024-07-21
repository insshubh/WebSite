import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Shubham Kumar
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://x.com/insshubh">
          <BsX />
        </a>
        <a href="https://www.linkedin.com/in/insshubh/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/insshubh">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
      <small className="inspired-text">
  Developed by <a href="https://github.com/insshubh">SK <span></span>
  </a>
  and inspired by <a href="https://github.com/AlgeraicAldeir"> AA
  </a>
</small>

      </div>
    </footer>
  );
};

export default Footer;
