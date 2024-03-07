import PokeAPIPokemon, { fallbackPokemon } from "../../types/pokeapi";

function sanitizeForPokeAPI(name: String): {name: String, species: boolean} {
  // we use different disambiguation conventions than pokeapi, so this function will ultimately contain all the checks necessary to take the name from the database
  // and bring it in line with the name pokeAPI expects
  if (name.endsWith("alolan") || name.endsWith("paldean")) {
    name = name.slice(0, name.length - 1)
  }
  if (name.endsWith('hisuian')) {
    name = name.slice(0, name.length - 2);
  }
  name = name.replaceAll(' ', '-');

  // some pokemon are classified in the API as 'pokemon-species/' rather than just 'pokemon/'. eventually we'll just have a lookup table for those and return species: true
  // if they're in the table
  return {name, species: false}
}

export function restoreFullName(name: string): string {
  name = name.split('-').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join("-");
  // will have to be a bit more careful than this i think
  if (!name.includes("paldean") || !name.includes("hisuian") || !name.includes("alolan")) {
    name = name.replaceAll('-', ' ')
  };
  return name;
}

export default async function getPokemon(pokemon: String): Promise<PokeAPIPokemon> {
  pokemon = pokemon.toLowerCase();
  let {name, species} = sanitizeForPokeAPI(pokemon);
  let res;
  if (species) {
    res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
  } else {
    res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  if (!res.ok) {
    return fallbackPokemon
  }
  if (res.body) {
    const uintarr = (await res.body.getReader().read()).value;
    if (uintarr) {
      const jsonString = Buffer.from(uintarr).toString('utf8');
      const parsedData: PokeAPIPokemon = JSON.parse(jsonString);
      return parsedData;
    }
  }
  return fallbackPokemon
}