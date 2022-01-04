
import React, {useContext} from 'react'
import {PokeContext} from './AppContainer'
import {getSinglePokemonById} from '../localFn'
import {useQuery} from 'react-query'

const Pokedex: React.FC = () => {
    const { pokedex, addPokedex } = useContext(PokeContext);
    const {data, isLoading, error} = useQuery(['pokemon', pokedex], () => getSinglePokemonById(pokedex))

    if(data === null) return <p>No pokemon is registered to your pokedex</p> 
    return (
       <>
        {data.map(i = <img src={data.sprites.other?.dream_world.front_default} style={{width: 250, maxHeight: 200}} />)}
       </>
    )
}   

export default Pokedex
