import React, {useState, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getRandomPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'

interface PokeContext {
  pokedex: number[];
  addPokedex: () => {};
}

const defaultState = {
  pokedex: [],
};

const ThemeContext = React.createContext<PokeContext>(defaultState);

export const MyContext = createContext<number[]>({pokedex: [], addPokedex: () => {}})

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
      <MyContext.Provider value={{pokedex, addPokedex}}>
        {count}
        {data? <PokemonContainer pokemon={data?.results}/> : null}
      </MyContext.Provider>
    </div>
  );
}

export default App;
