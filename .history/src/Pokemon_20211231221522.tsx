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
        <div>
            {data? 
                <img src={data.sprites.other?.dream_world.front_default} />
                <span>{data.name}</span>
                : null}
        </div>
    )
}

export default Pokemon
