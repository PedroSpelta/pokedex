import React from "react";
import Pokemon from "../pokemon/Pokemon";

function Pokedex({ pokemons }) {
  console.log(pokemons);
  return (
    <div className="flex gap-4 mx-40 flex-wrap justify-center">
      {pokemons.map((pokemon) => {
        return (
          <Pokemon
            name={pokemon.name}
            img={pokemon.img}
            hp="100"
            number={pokemon.number}
            type1={pokemon.type1}
            type2={pokemon.type2}
            key={pokemon.id}
          />
        );
      })}
    </div>
  );
}

export default Pokedex;
