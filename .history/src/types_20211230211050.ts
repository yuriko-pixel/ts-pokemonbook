
export type Pokemon = {
    abilities: Ability[]
}

type Ability = {
    ability: [
        name: string,
        url: string
    ];
    is_hidden: boolean;
    slot: number;
}

