
import React, {useContext} from 'react'
import {PokeContext} from './App'
import {getSinglePokemonById} from '../localFn'
import {useQuery} from 'react-query'

function Pokedex() {
    const { pokedex, addPokedex } = useContext(PokeContext);
    const {data, isLoading, error} = useQuery(['pokemon', pokedex], () => getSinglePokemonById(pokedex))
    return (
        <div>
            
        </div>
    )
}   

export default Pokedex
