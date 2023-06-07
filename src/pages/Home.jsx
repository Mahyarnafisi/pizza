import React from "react";
import { motion } from "framer-motion";
import LogoVinatge from "../assets/logo-vintage.png";
import Pizzaretro from "../assets/pizzaretro-bg-removed.png";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import "../styles/home.css";

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="home">
      <div className="home__left-box">
        <div className="header">
          <h1>Pizza</h1>
          <h1>Best Italian pizza in town</h1>
          <div className="left-box__header__rope">&nbsp;</div>

          <Link to="/menu">
            <button className="header__btn-menu">
              See all menu <BsChevronRight className="btn-icon" />
            </button>
          </Link>
        </div>
        <div className="pizza-card"></div>
      </div>
      <div className="home__right-box">
        <div className="right-box__card">
          <img src={Pizzaretro} alt="retro picture" />
          <h2>
            The taste of <span>Italy</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eius est praesentium natus vitae dolorum dolorem sit sunt voluptatibus, eaque aliquid laboriosam illo maxime! Minus, odio. Animi natus perspiciatis placeat?
            Repellendus, vel? Praesentium, cumque ea.
          </p>
          <div className="right-box__rope">&nbsp;</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
