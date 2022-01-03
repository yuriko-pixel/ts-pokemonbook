
import React, {useContext} from 'react'
import {PokeContext} from './App'
import {getSinglePokemonById} from '../localFn'

function Pokedex() {
    const { pokedex, addPokedex } = useContext(PokeContext);
    const {data, isLoading, error} = useQuery(['pokemon', url], () => getSinglePokemonbyId(url))
    return (
        <div>
            
        </div>
    )
}

export default Pokedex
