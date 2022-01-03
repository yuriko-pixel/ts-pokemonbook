import React, {useState, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getRandomPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'
import Pokedex from './Pokedex';
import {Link} from 'react-router-dom'

const defaultState = {
  pokedex: [0],
  addPokedex: () => {}
};
interface PokeContextInterface {
  pokedex: number[];
  addPokedex: (id: number) => void;
}

export const PokeContext = React.createContext<PokeContextInterface>(defaultState);

function App() {
  
  const [pokedex, setPokedex] = useState<number[]>([])

  function addPokedex(id: number) {
    setPokedex([...pokedex, id])
  }

  const { data, isLoading, error} = useQuery<RandomPokemon>(
    'pokemon',
    getRandomPokemon
  )
  console.log(data)

  if (isLoading) return <LinearProgress />
  if (error) return <p>Something went wrong</p>
  return (
    
    <div className="App">
      <PokeContext.Provider value={{pokedex, addPokedex}}>
        {pokedex}
        <Link to="/pokemon">Pokedex</Link>
        {data? <PokemonContainer pokemon={data?.results}/> : null}
      </PokeContext.Provider>
    </div>
   
  );
}

export default App;
