import React from "react";
import Emptycard from "../pokemon/Emptycard";
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
            hp={pokemon.hp}
            atk={pokemon.atk}
            def={pokemon.def}
            spatk={pokemon.spatk}
            spdef={pokemon.spdef}
            spd={pokemon.spd}
            number={pokemon.number}
            type1={pokemon.type1}
            type2={pokemon.type2}
            key={pokemon.id}
            weight={pokemon.weight}
            height={pokemon.height}
          />
        );
      })}
      <Emptycard />
      <Emptycard />

      <div className="hidden md:flex">
      <Emptycard />
      </div>
      <div className="hidden md:flex">
      <Emptycard />
      </div>


      <div className="hidden xl:flex">
      <Emptycard />
      </div>
      <div className="hidden xl:flex">
      <Emptycard />
      </div>
    </div>
  );
}

export default Pokedex;
