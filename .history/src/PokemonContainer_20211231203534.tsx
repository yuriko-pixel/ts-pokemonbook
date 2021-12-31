import React from 'react'
import Pokemon from './Pokemon'

type PokeResults = {
    name: string;
    url: string;
}
type Props = {
    pokemon: PokeResults[]
}

const PokemonContainer: React.FC<Props> = ({pokemon}) => {
    return (
        <ul>
            {pokemon.map(i => <Pokemon url={i.url} />)}
        </ul>
    )
}

export default PokemonContainer
