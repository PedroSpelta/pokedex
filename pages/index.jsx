import Head from "next/head";
import { useEffect, useState } from "react";
import Inputs from "../components/Input/Inputs";
import Pokedex from "../components/pokedex/Pokedex";
import axios from "axios";

export default function Home() {
  const [pokemonsList, setPokemonsList] = useState([]);

  const fetchPokemonLinks = async () => {
    const pokemonLinkData = await axios(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    return await pokemonLinkData.data.results;
  }

  const fetchPokemon = async () => {
    const pokemonLinksArray = await fetchPokemonLinks();
    const pokemonDataArray = [];
    for ( let c=0; c < pokemonLinksArray.length; c += 1) {
      const fetchPokemonInfo = await axios(pokemonLinksArray[c].url);
      const fetchPokemonInfoData = await fetchPokemonInfo.data
      const type2 = fetchPokemonInfoData.types[1];
      const pokemonDataObj =  {
        number: fetchPokemonInfoData.id,
        name: fetchPokemonInfoData.name,
        img: fetchPokemonInfoData.sprites.other["official-artwork"].front_default,
        type1: fetchPokemonInfoData.types[0].type.name,
        type2: type2? type2.type.name: 'none',
        hp: fetchPokemonInfoData.stats[0]["base_stat"],
        atk: fetchPokemonInfoData.stats[1]["base_stat"],
        def: fetchPokemonInfoData.stats[2]["base_stat"],
        spatk: fetchPokemonInfoData.stats[3]["base_stat"],
        spdef: fetchPokemonInfoData.stats[4]["base_stat"],
        spd: fetchPokemonInfoData.stats[5]["base_stat"],
        weight: fetchPokemonInfoData.weight,
        height: fetchPokemonInfoData.height,
      }
      pokemonDataArray.push(pokemonDataObj);
      
    }
    console.log(pokemonDataArray);
    return pokemonDataArray;
  };
  useEffect(async () => {
    const pokemonData = await fetchPokemon();
    setPokemonsList(pokemonData);
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
      <Inputs />

      <Pokedex pokemons={pokemonsList}/>

      </div>
    </div>
  );
}
