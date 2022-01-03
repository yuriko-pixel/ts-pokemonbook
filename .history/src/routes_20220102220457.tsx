import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Pokedex from './Pokedex';

export const Path = {
  app: '/',
  pokedex: '/pokedex',
};

const routes = (
  <Routes>
    <Route path={Path.app}><App/></Route>
    <Route path={Path.pokedex}><Pokedex/></Route>
  </Routes>
);

export default routes;