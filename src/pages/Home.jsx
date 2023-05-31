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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, fugit asperiores! Eius iure aliquam eligendi, saepe rem recusandae fuga blanditiis dolor maiores, ut minus ex autem enim nam! Mollitia, nemo!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
