import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import { Otameshi } from 'Otameshi';

export const Path = {
  app: '/',
  pokedex: '/pokedex',
};

const routes = (
  <Routes>
    <Route path={Path.app} component={App} />
    <Routepath={Path.pokemon} component={Otameshi} />
  </Routes>
);

export default routes;