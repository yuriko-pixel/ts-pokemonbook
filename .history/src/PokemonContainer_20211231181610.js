import React from 'react'

const PokemonContainer = ({pokemon}) => {
    return (
        <ul>
            {pokemon.map(i => <Pokemon />)}
        </ul>
    )
}

export default PokemonContainer
