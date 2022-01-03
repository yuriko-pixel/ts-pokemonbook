import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from 'react-query';
import Pokedex from './Pokedex';
import { Router } from 'react-router-dom';
import routes from './routes'

const client = new QueryClient();

ReactDOM.render(
  <Router {routes}>
  <React.StrictMode>
    
    <QueryClientProvider client={client}>
      
    </QueryClientProvider>
   
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
