import {State} from './stateType'
import {Action} from './action'

export const rootReducer = (state:   State, action) => {
    switch (action.type) {
        default: return state;
    }
}