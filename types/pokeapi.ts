export default interface PokeAPIPokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: Ability[];
	forms: NamedAPIResource[];
	game_indices: VersionGameIndex[];
	held_items: {
		item: NamedAPIResource;
		version_details: [{ version: NamedAPIResource; rarity: number }];
	}[];
	location_area_encounters: string;
	moves: PokemonMove[];
	past_types: { generation: NamedAPIResource; types: [PokemonType] }[];
	sprites: { [key: string]: string };
	cries: { [key: string]: string };
	species: NamedAPIResource;
	stats: PokemonStat[];
	types: PokemonType[];
}

export const fallbackPokemon: PokeAPIPokemon = {
	id: 201,
	name: "ERROR!",
	base_experience: 0,
	height: 0,
	is_default: false,
	order: 0,
	weight: 0,
	abilities: [],
	forms: [],
	game_indices: [],
	held_items: [],
	location_area_encounters: "",
	moves: [],
	past_types: [],
	sprites: {
		front_default:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
	},
	cries: {},
	species: { name: "", url: "" },
	stats: [
		{
			stat: { name: "hp", url: "https://pokeapi.co/v2/stat/1" },
			effort: 0,
			base_stat: 0
		},
		{
			stat: { name: "attack", url: "https://pokeapi.co/v2/stat/2" },
			effort: 0,
			base_stat: 0
		},
		{
			stat: { name: "defense", url: "https://pokeapi.co/v2/stat/3" },
			effort: 0,
			base_stat: 0
		},
		{
			stat: {
				name: "special-attack",
				url: "https://pokeapi.co/v2/stat/4"
			},
			effort: 0,
			base_stat: 0
		},
		{
			stat: {
				name: "special-defense",
				url: "https://pokeapi.co/v2/stat/5"
			},
			effort: 0,
			base_stat: 0
		},
		{
			stat: { name: "speed", url: "https://pokeapi.co/v2/stat/6" },
			effort: 0,
			base_stat: 0
		}
	],
	types: [
		{
			slot: 1,
			type: { name: "normal", url: "https://pokeapi.co/v2/type/1" }
		}
	]
};

interface PokemonStat {
	stat: NamedAPIResource;
	effort: number;
	base_stat: number;
}

interface PokemonType {
	slot: number;
	type: NamedAPIResource;
}

interface PokemonMove {
	move: NamedAPIResource;
	version_group_details: [
		{
			move_learn_method: NamedAPIResource;
			version_group: NamedAPIResource;
			level_learned_at: number;
		}
	];
}

interface Ability {
	id: number;
	name: string;
	is_main_series: boolean;
	generation: NamedAPIResource;
	names: [NamedAPIResource];
	effect_entries: [VerboseEffect];
	effect_changes: [AbilityEffectChange];
	flavor_text_entries: [AbilityFlavorText];
	pokemon: [AbilityPokemon];
}

interface NamedAPIResource {
	name: string;
	url: string;
}

interface LanguageResource {
	name: string;
	language: NamedAPIResource;
}

interface VerboseEffect {
	effect: string;
	short_effect: string;
	language: LanguageResource;
}

interface Effect {
	effect: string;
	language: LanguageResource;
}

interface AbilityEffectChange {
	effect_entries: [Effect];
	version_group: NamedAPIResource;
}

interface AbilityFlavorText {
	flavor_text: string;
	language: NamedAPIResource;
	version_group: NamedAPIResource;
}

interface AbilityPokemon {
	is_hidden: boolean;
	slot: number;
	pokemon: NamedAPIResource;
}

interface VersionGameIndex {
	game_index: string;
	version: NamedAPIResource;
}
