import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SAFARLI
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
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
        <a
          href="https://www.linkedin.com/in/nihat-safarli-235449153/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="#https://github.com/nihatsafarli" target={"_blank"}>
          <FaGithub />
        </a>
        <a href="#https://medium.com/@safarlinihat" target={"_blank"}>
          <BsMedium />
        </a>
      </div>

      <div className="footer__copyright">
      <small>&copy; <a href="https://www.linkedin.com/in/nihat-safarli-235449153/" target={"_blank"}>Nihat Safarli.</a> All Rights Reserved..</small>
      </div>
    </footer>
  );
};

export default Footer;
