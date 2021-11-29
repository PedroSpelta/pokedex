import React, { useState, Fragment } from "react";
import Select from "./Select";

function Inputs({
  pokemonList,
  setFilteredPokemons,
  filterType,
  setFilterType,
}) {
  return (
    // <form>
    <div className="flex justify-center relative z-10 mb-20">
      <div className="flex">
        <Select selected={filterType} setSelected={setFilterType} />
      </div>
    </div>
    // </form>
  );
}

export default Inputs;
