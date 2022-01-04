
import React, {useContext} from 'react'
import {PokeContext} from './AppContainer'
import {getSinglePokemonById} from '../localFn'
import {useQuery} from 'react-query'

import {Link} from 'react-router-dom'

const Pokedex: React.FC = () => {
    const { pokedex, addPokedex } = useContext(PokeContext);
    const {data, isLoading, error} = useQuery(['pokemon', pokedex], () => getSinglePokemonById(pokedex))
console.log(data)
    if(data === null) return <p>No pokemon is registered to your pokedex</p> 
    return (
       <>
        <h1>Your Pokedex</h1>
        <Link to="/" value="Home" />
        {data?.map(i => 
            <>
            <img src={i.sprites.other?.dream_world.front_default} />
            <span>{i.name}</span>
            </>
        )}
        
       </>
    )
}   

export default Pokedex
