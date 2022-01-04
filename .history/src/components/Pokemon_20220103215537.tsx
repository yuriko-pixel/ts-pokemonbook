import React, {useContext} from 'react'
import {useQuery} from 'react-query'
import {PokemonType} from '../types/types'
import {PokeContext} from './AppContainer'
import {getSinglePokemonbyUrl} from '../localFn'

type PropsItem = {
    item: number
}

const StyledBtn: React.FC<PropsItem> = ({item}) => {
    const { pokedex, addPokedex } = useContext(PokeContext)
    return (
        <button style={{textAlign: 'center'}} onClick={() => addPokedex(item)}>Add</button>
    )
}

type Props = {
    url: string
}

const Pokemon: React.FC<Props> = ({url}) => {
    const { pokedex, addPokedex } = useContext(PokeContext)

    const {data, isLoading, error} = useQuery(['pokemon', url], () => getSinglePokemonbyUrl(url))
    console.log(pokedex)
    return (
        <div style={{width: 300, height: 300}}>
            {data? 
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <img src={data.sprites.other?.dream_world.front_default} style={{width: 250, maxHeight: 200}} />
                    <span style={{textAlign: 'center', width: 300, marginTop: 15}}>{data.name}</span>
                    <span >Added!</span>
                    <StyledBtn item={data.id} />
                </div>
                : null}
        </div>
    )
}

export default Pokemon
