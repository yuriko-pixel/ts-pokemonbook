import React, {useState, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getRandomPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'


function App() {
  const MyContext = React.createContext()
  const [count, updateCount] = useState(0)
  function increment() {
    updateCount(count + 1)
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
      <MyContext.Provider value={{count, increment}}>
      {data? <PokemonContainer pokemon={data?.results}/> : null}
      </MyContext.Provider>
    </div>
  );
}

export default App;
