import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'




const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nihat-safarli-235449153/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/nihatsafarli" target="_blank"><FaGithub/></a>
      <a href="https://medium.com/@safarlinihat" target="_blank"><BsMedium/></a>
    </div>
  );
};

export default HeaderSocial;
