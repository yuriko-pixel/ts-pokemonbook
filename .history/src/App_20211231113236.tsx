import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';

function App() {
  const { data, isLoading, error} = useQuery(Pokemon[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
