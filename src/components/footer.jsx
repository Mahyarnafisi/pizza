import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__menu ">
        <Link className="navbar__link" to="/">
          Home
        </Link>
        <Link className="navbar__link" to="/menu">
          Menu
        </Link>
        <Link className="navbar__link" to="about">
          About
        </Link>
        <Link className="navbar__link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="footer__socialMedia">
        <BsInstagram className="socialMedia-icon" />
        <BsLinkedin className="socialMedia-icon" />
        <BsFacebook className="socialMedia-icon" />
        <BsReddit className="socialMedia-icon" />
      </div>
      <div className="copyRight">&copy; 2023 Pizzadelivery.com</div>
    </div>
  );
}

export default Footer;
