import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {Pokemon} from './types'
import {getPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';

function App() {
  const { data, isLoading, error} = useQuery<Pokemon[]>(
    'pokemon',
    getPokemon
  )
    console.log(data)

  if (isLoading) return <LinearProgress />
  if (error) return <p>Something went wrong</p>
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
