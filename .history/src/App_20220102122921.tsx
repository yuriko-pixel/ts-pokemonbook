import React, {useState, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getRandomPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'

export const MyContext = createContext({count: 0, increment: () => {}})
function App() {
  
  const [pokedex, setPokedex] = useState(number: [])
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
      <MyContext.Provider value={{count, increment}}>
        {count}
        {data? <PokemonContainer pokemon={data?.results}/> : null}
      </MyContext.Provider>
    </div>
  );
}

export default App;
