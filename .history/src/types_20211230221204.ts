
export type Pokemon = {
    abilities: Abilities[];
    base_experience: number;
    forms: Forms[];
    game_indices: GameIndices[];
    height: number;
    held_items: HeldItems[],
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Moves[];
    name: string;
    order: number;
    past_types: PastTypes[];
    species: {
        name: string,
        url: string
    };
    stats: Stats[];
    types: Types[];
    weight: number;
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
    name: string;
    url: string;
}

type GameIndices = {
    game_index: number;
    version: {
        name: string;
        url: string
    }
}

type HeldItems = {
    item: {
        name: string;
        url: string;
    };
    version_detail: VersionDetail[];
}

type VersionDetail = {
    rarity: number;
    version: {
        name: string;
        url: string
    };
}

type Moves = {
    move: {
        name: string;
        url: string;
    };
    version_group_details: VersionGroupDetails[];
}

type VersionGroupDetails = {
    level_learned_at: number;
    move_learn_method: {
        name: string;
        url: string;
    };
    version_group: {
        name: string;
        url: string;
    }
}