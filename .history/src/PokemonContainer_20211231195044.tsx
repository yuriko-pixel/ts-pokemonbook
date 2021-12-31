import React from 'react'
import Pokemon from './Pokemon'

type Props = {
    name: string;
    url: string;
}

const PokemonContainer: React.FC<Props> = ({pokemon: {}}) => {
    return (
        <ul>
            {pokemon.map(i => <Pokemon url={i.url} />)}
        </ul>
    )
}

export default PokemonContainer
