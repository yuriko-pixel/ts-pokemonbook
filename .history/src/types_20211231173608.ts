export type RandomPokemon = {
    count: number;
    next: string;
    previous: string;
    results: result[]
}

type result = {
    name: string;
    url: string;
}

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
    past_types: [];
    species: {
        name: string,
        url: string
    };
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string?;
        other?: {
            dream_world: {
                front_default: string;
            }
        }
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "front_female": null
      },
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

type Stats = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

type Types = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}