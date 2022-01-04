
import React, {useState,} from 'react'
import App from './App'
import Pokedex from './Pokedex'

const defaultState = {
    pokedex: [],
    addPokedex: () => {},
    removePokdex: () => {}
  };
  
  interface PokeContextInterface{
    pokedex: number[];
    addPokedex: (id: number) => void;
    removePokdex: (id: number) => void;
  }
  
  export const PokeContext = React.createContext<PokeContextInterface>(defaultState);

const  AppContainer: React.FC = ({children}) => {
    const [pokemon, setPokemon] = useState<number[]>([])

    function addPokedex(id: number) {
        setPokemon([...pokemon, id])
    }

    function removePokdex(id: number) {
        setPokemon(pokemon.filter(i => i !== id));
    }
    console.log(pokemon)
    return (
        <PokeContext.Provider value={{pokedex, addPokedex, removePokdex}}>
            {children}
        </PokeContext.Provider>
    )
}
