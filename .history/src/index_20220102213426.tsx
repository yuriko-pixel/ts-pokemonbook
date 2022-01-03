import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from 'react-query';
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";
import Pokedex from './Pokedex';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <QueryClientProvider client={client}>
        <App />
        <Route path="/pokedex"><Pokedex/></Route>
    </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
