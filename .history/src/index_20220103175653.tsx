import React, {createContext} from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from 'react-query';
import Pokedex from './Pokedex';
import { Router } from 'react-router-dom';
import routes from './routes'

import {Link, Route, BrowserRouter, Routes} from 'react-router-dom'

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
     <QueryClientProvider client={client}>
    <BrowserRouter>
    <Routes>
   
    <Route path="/"><App/></Route>
    
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
