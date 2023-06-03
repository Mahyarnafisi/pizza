import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
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
      <div className="footer__socialMedia">social media</div>
    </div>
  );
}

export default Footer;
