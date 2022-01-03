import {RandomPokemon, PokemonType} from './types/types'


export const getRandomPokemon = async(): Promise<RandomPokemon> => {
    return (await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')).json())
}

export const getSinglePokemonbyUrl = async(url: string): Promise<PokemonType> => {
    return (await (await fetch(`${url}`)).json())
}

export const getSinglePokemonById = async(id: number): Promise<PokemonType> => {
    return (await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json())
}