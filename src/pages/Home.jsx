import React from "react";
import LogoVinatge from "../assets/logo-vintage.png";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__left-box">
        <h1>left box</h1>
      </div>
      <div className="home__right-box">
        <div className="right-box__card">
          <img src={LogoVinatge} alt="retro picture" />
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
    </div>
  );
}

export default Home;
