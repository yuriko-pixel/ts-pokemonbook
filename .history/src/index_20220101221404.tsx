import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from 'react-query';

interface PokeContextInterface {
  id: number;
  url: string;
  setPokedex: () => {}
}

const PokeContext = createContext<PokeContextInterface | null>(null);

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <PokeContext.Provider value={{id: 0, url: ''}}>
        <App />
      </PokeContext.Provider>
    </QueryClientProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();