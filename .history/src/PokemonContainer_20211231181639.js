import React from 'react'

const PokemonContainer = ({pokemon}) => {
    return (
        <ul>
            {pokemon.map(i => <Pokemon url={i.url} />)}
        </ul>
    )
}

export default PokemonContainer
