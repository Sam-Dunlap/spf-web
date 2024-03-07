import PokeAPIPokemon, { fallbackPokemon } from "@/types/pokeapi";
import Image from "next/image";
import { restoreFullName } from "@/api";
import TypeLine from "./typeLine";

function sigmoidHeightAdjustment(x: number): number {
    const y = (50 / (1 + Math.E ** (-x + 110))) + 75;
    return y
}

export default function PokemonDetails({children} : {children: PokeAPIPokemon}) {
    let pokemon = children;
    if (!pokemon) {
        pokemon = fallbackPokemon
    }
    const hw = sigmoidHeightAdjustment(pokemon.height);
    return (
        <li className="h-[4.75rem] bg-slate-400 border-2 border-red-800 mb-2 grid grid-cols-[repeat(2,_125px)_repeat(6,_4rem)_1fr] rounded grid-rows-1 items-center justify-items-center">
            <Image src={pokemon.sprites['front_default']} alt={pokemon.name} height={hw} width={hw} />
            <div className="col-start-2 col-span-1 flex flex-col justify-center items-center">
                <p className="text-sm">{restoreFullName(pokemon.name)}</p>
                <TypeLine>{pokemon}</TypeLine>
            </div>
            <span className="col-start-3 col-span-1">{pokemon.stats[0].base_stat}</span>
            <span className="col-start-4 col-span-1">{pokemon.stats[1].base_stat}</span>
            <span className="col-start-5 col-span-1">{pokemon.stats[2].base_stat}</span>
            <span className="col-start-6 col-span-1">{pokemon.stats[3].base_stat}</span>
            <span className="col-start-7 col-span-1">{pokemon.stats[4].base_stat}</span>
            <span className="col-start-8 col-span-1">{pokemon.stats[5].base_stat}</span>
        </li>
    )
}