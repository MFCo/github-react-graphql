import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

import Profile from '../Profile';

const Main = () => (
  <main className="main-layout">
    <Switch>
      <Route exact path='/' component={Profile} />
    </Switch>
  </main>
);

export default Main;