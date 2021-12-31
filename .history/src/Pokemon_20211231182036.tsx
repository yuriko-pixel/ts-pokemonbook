import React from 'react'
import {getSinglePokemon} from './localFn'
import {useQuery} from 'react-query'
import {Pokemon} from './types'

function Pokemon(url: string) {
    const {data, isLoading, error} = useQuery<Pokemon>('pokemon', getSinglePokemon(url));
    
    return (
        <div>
            
        </div>
    )
}

export default Pokemon
