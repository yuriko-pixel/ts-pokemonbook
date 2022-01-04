
import React, {useContext} from 'react'
import {PokeContext} from './AppContainer'
import {getSinglePokemonById} from '../localFn'
import {useQuery} from 'react-query'

const Pokedex: React.FC = () => {
    const { pokedex, addPokedex } = useContext(PokeContext);
    const {data, isLoading, error} = useQuery(['pokemon', pokedex], () => getSinglePokemonById(pokedex))
    console.log(pokedex)
    if(data === null) return <p>No pokemon is registered to your pokedex</p> 
    return (
       <>
        {pokedex}
       </>
    )
}   

export default Pokedex
