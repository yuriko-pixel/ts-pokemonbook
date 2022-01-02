import React, {createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getRandomPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'

export const Pokedex = createContext();

function App() {
  const { data, isLoading, error} = useQuery<RandomPokemon>(
    'pokemon',
    getRandomPokemon
  )
    console.log(data)

  if (isLoading) return <LinearProgress />
  if (error) return <p>Something went wrong</p>
  return (
    <div className="App">
      <Pokedex.Provider pokemon={pokedex}>
      {data? <PokemonContainer pokemon={data?.results}/> : null}
      </Pokedex.Provider>
    </div>
  );
}

export default App;
