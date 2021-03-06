import React, { useCallback, useEffect, useRef, useState } from "react";
import Emptycard from "../pokemon/Emptycard";
import Pokemon from "../pokemon/Pokemon";

function Pokedex({ pokemons, loading, fetchPokemons, filterType }) {
  const filter = filterType.toLowerCase();
  const observer = useRef();
  const lastPokemonRef = useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchPokemons();
        }
      },
      [loading]
    );
    if (node) observer.current.observe(node);
  });

  return (
    <div className="flex gap-4 mx-40 flex-wrap justify-center">
      {pokemons.map((pokemon) => {
        const isFiltered = pokemon.type1 === filter || pokemon.type2 === filter || filter === 'all';
        return (
          isFiltered && (
            <Pokemon
              key={pokemon.name}
              aref={lastPokemonRef}
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
              weight={pokemon.weight}
              height={pokemon.height}
            />
          )
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
