import React, {useContext} from 'react'
import {useQuery} from 'react-query'
import {PokemonType} from '../types/types'
import {PokeContext} from './App'

type Props = {
    url: string
}

const Pokemon: React.FC<Props> = ({url}) => {
    const { pokedex, addPokedex } = useContext(PokeContext)
    const getSinglePokemon = async(url: string): Promise<PokemonType> => {
        return (await (await fetch(`${url}`)).json())
    }
    const {data, isLoading, error} = useQuery(['pokemon', url], () => getSinglePokemon(url))
    console.log(data)
    return (
        <div style={{width: 300, height: 300}}>
            {data? 
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <img src={data.sprites.other?.dream_world.front_default} style={{width: 250, maxHeight: 200}} />
                    <span style={{textAlign: 'center', width: 300, marginTop: 15}}>{data.name}</span>
                    <button style={{textAlign: 'center'}} onClick={() => addPokedex(data.id)}>Add</button>
                </div>
                : null}
        </div>
    )
}

export default Pokemon
