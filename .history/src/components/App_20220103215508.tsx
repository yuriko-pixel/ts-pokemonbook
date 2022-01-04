import React, {useState, createContext} from 'react';
import logo from './logo.svg';
import { useQuery } from 'react-query';
import {RandomPokemon} from '../types/types'
import {getRandomPokemon} from '../localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'
import Pokedex from './Pokedex';
import {Link} from 'react-router-dom'


function App() {

  const { data, isLoading, error} = useQuery<RandomPokemon>(
    'pokemon',
    getRandomPokemon
  )

  if (isLoading) return <LinearProgress />
  if (error) return <p>Something went wrong</p>
  return (
    
    <div className="App">
        <Link to="/pokedex">Pokedex</Link>
        {data? <PokemonContainer pokemon={data?.results}/> : null}
      
    </div>
   
  );
}

export default App;
