import React, {createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getRandomPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'


interface PokeContextInterface {
  id: number;
  url: string;
  setPokedex: () => {}
}

const PokeContext = createContext<PokeContextInterface | null>(null);

function App() {
  const [pokedex, setPokedex] = React.useState({});
  
  const { data, isLoading, error} = useQuery<RandomPokemon>(
    'pokemon',
    getRandomPokemon
  )
  console.log(data)

  if (isLoading) return <LinearProgress />
  if (error) return <p>Something went wrong</p>
  return (
    <div className="App">
      <PokeContext.Provider value={{id, url, setPokedex}}}>
      {data? <PokemonContainer pokemon={data?.results}/> : null}
      </PokeContext.Provider>
    </div>
  );
}

export default App;
