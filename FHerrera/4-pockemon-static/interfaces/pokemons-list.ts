// Generated by https://quicktype.io

export interface PokemonsListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:   SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number;
    img:  string;
}
