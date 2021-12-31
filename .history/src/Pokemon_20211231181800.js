

import React from 'react'

function Pokemon(url) {
    const {data, isLoading, error} = useQuery<Pokemon>('pokemon', getSinglePokemon);
    return (
        <div>
            
        </div>
    )
}

export default Pokemon
