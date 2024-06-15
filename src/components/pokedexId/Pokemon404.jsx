import React from "react";
import { Link } from "react-router-dom";

const Pokemon404 = () => {
  return (
    <div className="pokedex__error">
      <h1>Pokemon not Found 😢 </h1>
      <br />
      <Link className="pokedex_btn" to="/pokedex">
        Return to Pokedex
      </Link>
    </div>
  );
};

export default Pokemon404;
