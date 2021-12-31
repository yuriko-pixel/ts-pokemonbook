import React from 'react'
import {getSinglePokemon} from './localFn'
import {useQuery} from 'react-query'
import {Pokemon} from './types'

const Pokemon: React.FC<Props> = (url: string) => {
    const {data, isLoading, error} = useQuery<Pokemon>('pokemon', getSinglePokemon);
    
    return (
        <div>
            
        </div>
    )
}

export default Pokemon
