import React from 'react'
import {useQuery} from 'react-query'
import {Pokemon} from './types'

type Props = {
    url: string
}

const Pokemon: React.FC<Props> = ({url}) => {
    const getSinglePokemon = async(url): Promise<Pokemon> => {
        return (await (await fetch(`${url}`)).json())
    }
    const {data, isLoading, error} = useQuery<Pokemon>('pokemon', getSinglePokemon(url));
    
    return (
        <div>
            
        </div>
    )
}

export default Pokemon
