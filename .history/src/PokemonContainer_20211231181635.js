import React from 'react'

const PokemonContainer = ({pokemon}) => {
    return (
        <ul>
            {pokemon.map(i => <Pokemon pokemon={i.url} />)}
        </ul>
    )
}

export default PokemonContainer
