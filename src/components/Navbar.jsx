import React from "react";
import "../styles/navbar.css";
import Logo from "../assets/logosmall.webp";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="sidebar">
        <Link className="sidebar__link " to="/">
          Home
        </Link>
        <Link className="sidebar__link" to="/menu">
          Menu
        </Link>
        <Link className="sidebar__link" to="/about">
          About
        </Link>
        <Link className="sidebar__link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar__list">
        <Link className="navbar__link " to="/">
          <i class="fa-solid fa-house btn__icon"></i>
          Home
        </Link>
        <Link className="navbar__link" to="/menu">
          <i class="fa-solid fa-utensils btn__icon"></i>
          Menu
        </Link>
        <Link className="navbar__link" to="/about">
          <i class="fa-solid fa-circle-question btn__icon"></i>About
        </Link>
        <Link className="navbar__link" to="/contact">
          <i class="fa-regular fa-face-smile btn__icon"></i>Contact
        </Link>

        <button className="navbar__btn ">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
