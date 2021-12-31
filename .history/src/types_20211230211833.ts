
export type Pokemon = {
    abilities: Abilities[];
    base_experience: number;
}

type Abilities = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}