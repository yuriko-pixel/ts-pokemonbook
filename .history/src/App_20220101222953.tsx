import React, {createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import {RandomPokemon} from './types'
import {getRandomPokemon} from './localFn'
import LinearProgress from '@material-ui/core/LinearProgress';
import PokemonContainer from './PokemonContainer'


function App() {
  const [pokedex, setPokedex] = React.useState({id: 0, url: ''});
  interface PokeContextInterface {
    id: number;
    addPokedex: (id: number) => {};
  }
  
  const PokeContext = createContext<PokeContextInterface>(id: 0, addPokedex: (id: 0, url: '') => {}});

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
      {data? <PokemonContainer pokemon={data?.results}/> : null}
      </PokeContext.Provider>
    </div>
  );
}

export default App;
