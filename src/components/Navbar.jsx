import React from "react";
import "../components/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="foo">
            Product <i class="ri-restaurant-2-line"></i>
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="foo">
            Services <i class="ri-menu-2-line"></i>
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="foo">
            About us! <i class="ri-information-line"></i>
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="foo">
            Contacts <i class="ri-links-line"></i>
          </a>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
