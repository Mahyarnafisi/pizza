import React from "react";
import "../components/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className="navbar__list">
        <Link className="navbar__link" to="/">
          <i class="fa-solid fa-house"></i>
          Home
        </Link>
        <Link className="navbar__link" to="/menu">
          <i class="fa-solid fa-utensils"></i>
          Menu
        </Link>
        <Link className="navbar__link" to="/about">
          <i class="fa-solid fa-circle-question"></i>
          About
        </Link>
        <Link className="navbar__link" to="/contact">
          <i class="fa-regular fa-face-smile"></i>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
