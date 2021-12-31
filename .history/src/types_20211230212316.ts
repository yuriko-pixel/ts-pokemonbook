
export type Pokemon = {
    abilities: Abilities[];
    base_experience: number;
    forms: Forms[];
    game_indices: GameIndices[];
    height: number;
    held_items: [],
    id: number;
    
}

type Abilities = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

type Forms = {

}