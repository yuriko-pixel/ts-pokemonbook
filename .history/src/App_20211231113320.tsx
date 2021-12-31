import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {Pokemon} from './types'

function App() {
  const { data, isLoading, error} = useQuery<Pokemon[]>(
    'pokemon',
    getPokemon
  )
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
