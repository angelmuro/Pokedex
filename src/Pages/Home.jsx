import React from "react";
import FormHome from "../components/home/FormHome";
import "./styles/home.css";

const Home = () => {
  return (
    <article className="pokedex">
      <img className="pokedex_img" src="/images/home/pokedex.png" alt="" />
      <header className="pokedex_header">
        <h2 className="pokedex_subtitle">Hi Trainer</h2>
        <p className="pokedex_text">Give me your name to see the pokedex</p>
      </header>
      <FormHome />
    </article>
  );
};

export default Home;
