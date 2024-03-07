import Team from "@/types/team";
import {getPokemon} from "../../api";
import Image from "next/image";
import Link from "next/link";

export async function TeamPreview({children} : {children : Team}) {
    
    const pokemon = children.pokemon;
    const imgUrls = await Promise.all(pokemon.map(async poke =>{ 
        const result = await getPokemon(poke);
        if (!result) {
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png'
        } else {
            return result.sprites['front_default']
        }
    }));
    const images = imgUrls.map(img => {
        // this gets the unique id from the URL
        const key = img.split('/')[8].split('.')[0];
        return (
            <div key={key} className="w-20">
                <Image src={img} alt={key} height={75} width={75}></Image>
            </div>
        )
    });
    return (
            <Link href={`teams/${children.team_name}`} className="transition ease-in-out h-32 hover:scale-[1.02] border-solid rounded border-slate-700 grid grid-cols-[300px_1fr_100px] w-9/12 hover:border-white border-2 bg-zinc-800 items-center justify-items-center">
                <div className="text-center">
                    <h1 className="text-xl">{children.team_name}</h1>
                    <h3 className="text-sm">{children.coach}</h3>
                </div>
                <div className="flex flex-row justify-between col-start-2">
                    {images}
                </div>
                <div className="text-center text-sm">
                    <p><span className="text-emerald-400">{children.wins}</span> / <span className="text-red-700">{children.losses}</span></p>
                </div>
            </Link>
    )
}

export function TeamPreviewLoading() {
    return (
        <div className="h-28 border-solid rounded border-slate-700 w-9/12 bg-zinc-800 grid items-center justify-items-center">
            <h1 className="text-xl">Loading...</h1>
        </div>
    )
}