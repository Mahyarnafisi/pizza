import React from "react";
import "../components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="" alt="photo" />
      </div>
      <div className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            Product
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            Services
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            About us!
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            Contacts
          </a>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
