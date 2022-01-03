import React, {useContext} from 'react'
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
        <>
            <h1>Pokemon</h1>
            <p>Wanna create your own Pokemon list?</p>
            <p>Just press + button next to Pokemon!</p>
            <ul style={{display: 'flex', flexWrap: 'wrap', margin: '0px 100px'}}>
                {pokemon.map(i => <Pokemon url={i.url} />)}
            </ul>
        </>
    )
}

export default PokemonContainer
