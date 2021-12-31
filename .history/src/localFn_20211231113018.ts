import {Pokemon} from './types'


export const getPokemon = async(): Promise<Pokemon> => {
    (await (await fetch('')).json())
}
