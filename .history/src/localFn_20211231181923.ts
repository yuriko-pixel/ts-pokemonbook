import {RandomPokemon, Pokemon} from './types'


export const getRandomPokemon = async(): Promise<RandomPokemon> => {
    return (await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')).json())
}

export const getSinglePokemon = async(url: string): Promise<Pokemon[]> => {
    return (await (await fetch(`${url}`)).json())
}