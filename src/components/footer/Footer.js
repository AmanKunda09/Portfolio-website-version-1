import React from "react";
import "./Footer.css";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        AMAN
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
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkenin.com">
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
        <a href="https://github.com">
          <AiOutlineGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>Copyright &copy;2023 Aman Kunda</small>
      </div>
    </footer>
  );
};

export default Footer;
