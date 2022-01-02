import React, {useState, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getRandomPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'



function App() {
  
  const [pokedex, setPokedex] = useState<number[]>([])
  interface PokeContextInterface {
    pokedex: number[];
    addPokedex: () => {};
  }
  
  const defaultState = {
    pokedex: [0],
  };
  
  const PokeContext = React.createContext<PokeContextInterface>(defaultState);
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
        {data? <PokemonContainer pokemon={data?.results}/> : null}
      </PokeContext.Provider>
    </div>
  );
}

export default App;
