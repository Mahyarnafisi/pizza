import React from "react";
import "../styles/price.css";
function Price({ price, taste }) {
  return (
    <div className="item__price">
      <div className="taste">{taste}</div>
      <div className="price">{price}$</div>
    </div>
  );
}

export default Price;
