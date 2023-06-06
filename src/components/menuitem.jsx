import React from "react";
import "../styles/menuItem.css";
import Price from "./price";
function MenuItem({ name, image, info, review, price, id, taste }) {
  return (
    <div className="menu__item">
      <div className="item__number">{id}</div>
      <div className="item__image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="item__card">
        <h2 className="item__header">{name}</h2>
        <p className="item__info">{info}</p>
        <p className="item__review">{`The item has (${review}) reviews.`}</p>
        <Price className="item__price" price={price} taste={taste} />
      </div>
    </div>
  );
}

export default MenuItem;
