import { getPokemon, teamByTeamName } from "@/api"
import PokemonDetails from "@/app/components/pokemonDetails";
import PokeAPIPokemon from "@/types/pokeapi";
import { notFound } from "next/navigation";
import ControlPanel from "./controlPanel";

export default async function TeamPage({ params }: { params: { team_name: string } }) {

    const team = teamByTeamName(params.team_name);
    let pokemon: PokeAPIPokemon[];
    if (!team) {
        notFound();
    } else {
        pokemon = await Promise.all(team.pokemon.map(mon => getPokemon(mon)));
    }
    const details = pokemon.map(p => <PokemonDetails key={p.id}>{p}</PokemonDetails>)
    return (
        <div className="grid grid-cols-9 mx-2">
            <div className="col-start-1 col-span-4">
            <div className="grid grid-cols-[repeat(2,_125px)_repeat(6,_5rem)] h-[2rem] items-center justify-items-center">
                <div className="col-start-1 col-span-2">
                    
                </div>
                <div className="col-start-3 col-span-1">HP</div>
                <div className="col-start-4 col-span-1">Atk</div>
                <div className="col-start-5 col-span-1">Def</div>
                <div className="col-start-6 col-span-1">SpA</div>
                <div className="col-start-7 col-span-1">SpD</div>
                <div className="col-start-8 col-span-1">Spe</div>
            </div>
            <ul>
                {details}
            </ul>
            </div>
            <div className="m-1 col-start-5 col-span-1 h-[90%] bg-gray-800 self-center rounded border-2 border-solid border-slate-700">
                <ControlPanel />
            </div>
        </div>
    )
}