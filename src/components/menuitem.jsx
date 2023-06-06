import React from "react";
import "../styles/menuItem.css";
function MenuItem({ name, image, info, review, price, id }) {
  return (
    <div className="menu__item">
      <div className="item__number">{id}</div>
      <div className="item__image" style={{ backgroundImage: `url(${image})` }}>
        image
      </div>
      <div className="item__card">
        <h2 className="item__header">{name}</h2>
        <p className="item__info">{info}</p>
        <p className="item__review">{review}</p>
        <div className="item__price">
          <div className="item__taste"></div>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
