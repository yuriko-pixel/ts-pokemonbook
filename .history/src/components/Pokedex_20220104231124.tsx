
import React, {useContext} from 'react'
import {PokeContext} from './AppContainer'
import {getSinglePokemonById} from '../localFn'
import {useQuery} from 'react-query'

const Pokedex: React.FC = () => {
    const { pokedex, addPokedex } = useContext(PokeContext);
    const {data, isLoading, error} = useQuery(['pokemon', pokedex], () => getSinglePokemonById(pokedex))
console.log(data)
    if(data === null) return <p>No pokemon is registered to your pokedex</p> 
    return (
       <>
        <h1>Your Pokedex</h1>
        {data?.map(i => 
            <>
            <img src={i.sprites.other?.dream_world.front_default} />
            <span>{i.name}</span>
            </>
        )}
        <Link to="/">Home<Link/>
       </>
    )
}   

export default Pokedex
