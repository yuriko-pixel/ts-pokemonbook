import React from 'react'
import Pokemon from './Pokemon'

const PokemonContainer = ({pokemon}) => {
    return (
        <ul>
            {pokemon.map(i => <Pokemon url={i.url} />)}
        </ul>
    )
}

export default PokemonContainer
