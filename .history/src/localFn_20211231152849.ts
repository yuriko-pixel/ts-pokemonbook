import {RandomPokemon, Pokemon} from './types'


export const getRandomPokemon = async(): Promise<RandomPokemon> => {
    return (await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')).json())
}

export const getSinglePokemon = async(id: number): Promise<Pokemon[]> => {
    return (await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json())
}