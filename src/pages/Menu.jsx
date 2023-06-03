import React from "react";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__header">
        <h2 className="menu__title">Pizzas</h2>
        <p className="menu__title-sub"> All fresh and tasty</p>
      </div>
      <div className="menu__list">
        <div className="menu__item">card</div>
      </div>
    </div>
  );
}

export default Menu;
