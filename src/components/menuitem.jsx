import React from "react";
import "../styles/menuItem.css";
function MenuItem({ name, info, review, price }) {
  return (
    <div className="menu__item">
      <p>{name}</p>
    </div>
  );
}

export default MenuItem;
