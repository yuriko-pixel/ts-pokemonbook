import {RandomPokemon, PokemonType} from './types/types'


export const getRandomPokemon = async(): Promise<RandomPokemon> => {
    return (await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')).json())
}

export const getSinglePokemonbyUrl = async(url: string): Promise<PokemonType> => {
    return (await (await fetch(`${url}`)).json())
}

export const getSinglePokemonById = async(ids: number[]): Promise<PokemonType[] | void> => {
    if(ids.length <= 0) return;
    let data: PokemonType[] = [];
    for(let i=0; i<ids.length; i++) {
        data.push(await (await fetch(`https://pokeapi.co/api/v2/pokemon/${ids[i]}`)).json())
    }
    return data;
}