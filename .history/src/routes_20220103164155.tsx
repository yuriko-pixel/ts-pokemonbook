import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Pokedex from './Pokedex';

export const Path = {
  app: '/',
  pokedex: '/pokedex',
};

const routes = (
    <Router>
  <Routes>
    <Route path={Path.app}><App/></Route>
    <Route path={Path.pokedex}><Pokedex/></Route>
  </Routes>
  </Router>
);

export default routes;