import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Game from '../pages/Game';
import Search from '../pages/Search';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/game/:slug" component={Game} />
      <Route path="/search" component={Search} />
    </Switch>
  );
};

export default Routes;
