import React from "react";
import { motion } from "framer-motion";
import "../styles/menu.css";
import menuList from "../helpers/menuList";
import MenuItem from "../components/menuitem";

function Menu() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="menu">
      <div className="menu__header">
        <h2 className="menu__title">Pizzas</h2>
        <p className="menu__title-sub"> All fresh and tasty</p>
      </div>
      <div className="menu__list">
        {menuList.map((menuItem, key) => {
          return <MenuItem key={key} id={menuItem.id} name={menuItem.name} image={menuItem.image} info={menuItem.info} review={menuItem.review} price={menuItem.price} taste={menuItem.taste} />;
        })}
      </div>
    </motion.div>
  );
}

export default Menu;
