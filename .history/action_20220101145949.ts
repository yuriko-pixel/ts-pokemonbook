enum ActionType {
    ADD_TO_POKEDECK = 'ADD_TO_POKEDECK',
    REMOVE_FROM_POKEDECK = 'REMOVE_FROM_POKEDECK'
}


interface actionAdd {
    type: ActionType.ADD_TO_POKEDECK;
    payload: number;
}

interface actionRemove {
    type: ActionType.REMOVE_FROM_POKEDECK;
    payload: number;
}

type Action = actionAdd | actionRemove;
