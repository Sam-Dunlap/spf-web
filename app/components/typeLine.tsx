import PokeAPIPokemon from "@/types/pokeapi";
import Image from "next/image";
import bug from "@/public/type_sprites/bug.png"
import dark from "@/public/type_sprites/dark.png"
import dragon from "@/public/type_sprites/dragon.png"
import electric from "@/public/type_sprites/electric.png"
import fairy from "@/public/type_sprites/fairy.png"
import fighting from "@/public/type_sprites/fighting.png"
import fire from "@/public/type_sprites/fire.png"
import flying from "@/public/type_sprites/flying.png"
import ghost from "@/public/type_sprites/ghost.png"
import grass from "@/public/type_sprites/grass.png"
import ground from "@/public/type_sprites/ground.png"
import ice from "@/public/type_sprites/ice.png"
import normal from "@/public/type_sprites/normal.png"
import poison from "@/public/type_sprites/poison.png"
import psychic from "@/public/type_sprites/psychic.png"
import rock from "@/public/type_sprites/rock.png"
import steel from "@/public/type_sprites/steel.png"
import water from "@/public/type_sprites/water.png"

function icon(type: string) {
    switch (type) {
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fairy":
            return fairy;
        case "fighting":
            return fighting;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return normal;
    }
}

export default function TypeLine({children} : {children: PokeAPIPokemon}) {
    const pokemon = children;
    const type0 = icon(pokemon.types[0].type.name);
    switch (pokemon.types.length) {
        case 1:
            return (
                <div className="flex flex-row justify-center items-center">
                    <Image src={type0} title={pokemon.types[0].type.name} height={20} width={20} alt={pokemon.types[0].type.name}></Image>
                </div>
            )
        case 2:
            const type1 = icon(pokemon.types[1].type.name);
            return (
                <div className="flex flex-row justify-center items-center">
                    <Image src={type0} title={pokemon.types[0].type.name} height={20} width={20} alt={pokemon.types[0].type.name}></Image>
                    <Image src={type1} title={pokemon.types[1].type.name} height={20} width={20} alt={pokemon.types[1].type.name}></Image>
                </div>

            )
        default:
            // pokemon don't have < 1 or > 2 types so TypeLine will never reach the default case
            return (
                <></>
            )
    }
}