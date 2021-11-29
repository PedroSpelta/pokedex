import Head from "next/head";
import { useEffect, useState } from "react";
import Inputs from "../components/Input/Inputs";
import Pokedex from "../components/pokedex/Pokedex";
import axios from "axios";

export default function Home() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState("all");

  const fetchPokemonLinks = async () => {
    const pokemonLinkData = await axios(
      `https://pokeapi.co/api/v2/pokemon?offset=${pokemonsList.length}&limit=50`
    );
    return await pokemonLinkData.data.results;
  };

  const fetchPokemonData = async () => {
    const pokemonLinksArray = await fetchPokemonLinks();
    const pokemonDataArray = [];
    for (let c = 0; c < pokemonLinksArray.length; c += 1) {
      const fetchPokemonInfo = await axios(pokemonLinksArray[c].url);
      const fetchPokemonInfoData = await fetchPokemonInfo.data;
      const type2 = fetchPokemonInfoData.types[1];
      const pokemonDataObj = {
        number: fetchPokemonInfoData.id,
        name: fetchPokemonInfoData.name,
        img: fetchPokemonInfoData.sprites.other["official-artwork"]
          .front_default,
        type1: fetchPokemonInfoData.types[0].type.name,
        type2: type2 ? type2.type.name : null,
        hp: fetchPokemonInfoData.stats[0]["base_stat"],
        atk: fetchPokemonInfoData.stats[1]["base_stat"],
        def: fetchPokemonInfoData.stats[2]["base_stat"],
        spatk: fetchPokemonInfoData.stats[3]["base_stat"],
        spdef: fetchPokemonInfoData.stats[4]["base_stat"],
        spd: fetchPokemonInfoData.stats[5]["base_stat"],
        weight: fetchPokemonInfoData.weight,
        height: fetchPokemonInfoData.height,
      };
      pokemonDataArray.push(pokemonDataObj);
    }
    setLoading(false);
    return pokemonDataArray;
  };

  const fetchPokemons = async () => {
    setLoading(true);
    const pokemonData = await fetchPokemonData();
    const newPokemonList = [...pokemonsList, ...pokemonData];
    console.log(newPokemonList);
    setPokemonsList(newPokemonList);
    setFilteredPokemons(newPokemonList);
  };

  useEffect(async () => {
    fetchPokemons();
  }, []);
  return (
    <div className="">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white text-center text-3xl font-semibold py-2">
        Pokedex
      </div>

      <div className="bg-gray-700">
        <Inputs
          pokemonList={pokemonsList}
          setFilteredPokemons={setFilteredPokemons}
          filterType={filterType}
          setFilterType={setFilterType}
        />

        <Pokedex
          pokemons={filteredPokemons}
          loading={loading}
          filterType={filterType}
          fetchPokemons={fetchPokemons}
        />
      </div>
    </div>
  );
}
