import React, { useState, Fragment } from "react";
import Select from "./Select";

function Inputs({ pokemonList, setFilteredPokemons }) {
  const [selected, setSelected] = useState({ id: 1, name: "Grass" });
  const filterByElement = () => {
    const element = selected.name.toLowerCase();
    const filtered = pokemonList.filter((pokemon) => {
      return pokemon.type1 === element || pokemon.type2 === element;
    });
    setFilteredPokemons(filtered);
  };
  return (
    // <form>
    <div className="flex">
      <Select selected={selected} setSelected={setSelected} />
      <button className="bg-white" onClick={filterByElement}>Search</button>
    </div>
    // </form>
  );
}

export default Inputs;
