export type PokeType = {
    name: string;
    url: string;
  };

export type IPokemon = {
name: string;
height: number;
base_experience: number;
weight: number;
sprites: IPokemonSprites;
types: IPokemonType[];
stats: IPokemonStat[];
};

export type IPokemonType = {
slot: number;
type: PokeType;
};

export type IPokemonSprites = {
front_default: string;
back_default: string;
front_shiny: string;
};

export type IPokemonStat = {
base_stat: number;
effort: string;
stat: PokeType;
};


