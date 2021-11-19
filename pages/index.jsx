import Head from "next/head";
import Inputs from "../components/Input/Inputs";
import Pokedex from "../components/pokedex/Pokedex";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white text-center text-3xl font-semibold py-2">
        Pokedex
      </div>

      <Inputs />

      <Pokedex />
    </div>
  );
}
