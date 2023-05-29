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
        <Link className="list__link" to="/">
          Home
        </Link>
        <Link className="list__link" to="/menu">
          Menu
        </Link>
        <Link className="list__link" to="/about">
          About
        </Link>
        <Link className="list__link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
