import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getSinglePokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';

function App() {
  const { data, isLoading, error} = useQuery<RandomPokemon[]>(
    'pokemon',
    getStinglePokemon
  )
    // console.log(data)

  if (isLoading) return <LinearProgress />
  if (error) return <p>Something went wrong</p>
  return (
    <div className="App">
      {data?.result.map(i => <li>{i.name}</li>)}
    </div>
  );
}

export default App;
