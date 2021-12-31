
export type Pokemon = {
    abilities: Abilities[];
    base_experience: number;
}

type Abilities = {
    ability: ability;
    is_hidden: boolean;
    slot: number;
}

type ability = {
    name: string;
    url: string;
}