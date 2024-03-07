import {getPokemon} from "@/api";

export default async function Home() {
  const pokemon = await getPokemon('rayquaza');
  return (
    <h1 className="hover:text-sky-400/25 bg-gradient-to-r from-cyan-500 to-red-500 min-h-full text-center">{pokemon?.stats[0].base_stat}</h1>
  )
}

