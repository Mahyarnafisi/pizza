import React from "react";
import { motion } from "framer-motion";
import "../styles/menuItem.css";
import Price from "./price";
function MenuItem({ name, image, info, review, price, id, taste }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", delay: 0.5 }} className="menu__item">
      <div className="item__number">{id}</div>
      <div className="item__image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="item__card">
        <h2 className="item__header">{name}</h2>
        <p className="item__info">{info}</p>
        <p className="item__review">{`The item has (${review}) reviews.`}</p>
        <Price className="item__price" price={price} taste={taste} />
      </div>
    </motion.div>
  );
}

export default MenuItem;
