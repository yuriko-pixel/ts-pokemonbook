import React from 'react'
import {useQuery} from 'react-query'
import {PokemonType} from './types'
import { useSelector, TypedUseSelectorHook } from 'react-redux';
type Props = {
    url: string
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const Pokemon: React.FC<Props> = ({url}) => {

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
                    <button style={{textAlign: 'center'}}>Add</button>
                </div>
                : null}
        </div>
    )
}

export default Pokemon
