import React from 'react'
import {getSinglePokemon} from './localFn'
import {useQuery} from 'react-query'

function Pokemon(url) {
    const {data, isLoading, error} = useQuery<Pokemon>('pokemon', getSinglePokemon(url));
    
    return (
        <div>
            
        </div>
    )
}

export default Pokemon
