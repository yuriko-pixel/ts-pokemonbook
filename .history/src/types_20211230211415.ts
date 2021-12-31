
export type Pokemon = {
    abilities: Ability[],
    base_experience: number
}

type Ability = {
    ability: [
        name: string,
        url: string
    ];
    is_hidden: boolean;
    slot: number;
}

