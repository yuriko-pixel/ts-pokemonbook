export enum ActionType {
    ADD_TO_POKEDECK = 'ADD_TO_POKEDECK',
    REMOVE_FROM_POKEDECK = 'REMOVE_FROM_POKEDECK'
}


export interface actionAdd {
    type: ActionType.ADD_TO_POKEDECK;
    payload: number;
}

export interface actionRemove {
    type: ActionType.REMOVE_FROM_POKEDECK;
    payload: number;
}

export type Action = actionAdd | actionRemove;

interface State {
    pokedeck: number[],
}

export const rootReducer = (state: State, action: Action) => {
    switch (action.type) {
        default: return state;
    }
}