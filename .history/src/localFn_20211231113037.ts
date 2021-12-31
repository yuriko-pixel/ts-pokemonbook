import {Pokemon} from './types'


export const getPokemon = async(): Promise<Pokemon> => {
    return (await (await fetch('')).json())
}
