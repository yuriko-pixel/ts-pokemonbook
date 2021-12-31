import React from 'react'
import {getSinglePokemon} from './localFn'

function Pokemon(url) {
    const {data, isLoading, error} = useQuery<Pokemon>('pokemon', getSinglePokemon);
    return (
        <div>
            
        </div>
    )
}

export default Pokemon
