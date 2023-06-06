import React from "react";
import "../styles/menu.css";
import menuList from "../helpers/menuList";
import MenuItem from "../components/menuitem";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__header">
        <h2 className="menu__title">Pizzas</h2>
        <p className="menu__title-sub"> All fresh and tasty</p>
      </div>
      <div className="menu__list">
        {menuList.map((menuItem, key) => {
          return <MenuItem key={key} name={menuItem.name} info={menuItem.info} review={menuItem.review} price={menuItem.price} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
