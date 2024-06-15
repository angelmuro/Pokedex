import React from "react";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_red"></div>
      <div className="header_black"></div>
      <div className="header_circle">
        <div className="header_circle-int"></div>
      </div>
      <img className="pokedex__img" src="./images/home/pokedex.png" alt="" />
    </header>
  );
};

export default Header;
