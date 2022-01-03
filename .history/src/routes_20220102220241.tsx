import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from 'App';
import { Otameshi } from 'Otameshi';

export const Path = {
  app: '/',
  otameshi: '/otameshi',
};

const routes = (
  <Routes>
    <Route exact path={Path.app} component={App} />
    <Route exact path={Path.otameshi} component={Otameshi} />
    <Redirect to={Path.app} />
  </Routes>
);

export default routes;