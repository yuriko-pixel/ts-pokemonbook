
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

export const AppContainer: React.FC = ({children}) => {
    const [pokedex, setPokedex] = useState<number[]>([])

    function addPokedex(id: number) {
        setPokedex([...pokedex, id])
    }

    function removePokdex(id: number) {
        setPokedex(pokedex.filter(i => i !== id));
    }
    console.log(pokedex)
    return (
        <PokeContext.Provider value={{pokedex, addPokedex, removePokdex}}>
            {children}
        </PokeContext.Provider>
    )
}
