import React from 'react'
import {useQuery} from 'react-query'
import {PokemonType} from './types'

type Props = {
    url: string
}

const Pokemon: React.FC<Props> = ({url}) => {

    const getSinglePokemon = async(url: string): Promise<PokemonType> => {
        return (await (await fetch(`${url}`)).json())
    }
    const {data, isLoading, error} = useQuery(['pokemon', url], () => getSinglePokemon(url))
    console.log(data)
    return (
        <div style={{width: 300}}>
            {data? 
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <img src={data.sprites.other?.dream_world.front_default} style={{width: 250}} />
                <span style={{position; 'center'}}>{data.name}</span>
                </div>
                : null}
        </div>
    )
}

export default Pokemon
