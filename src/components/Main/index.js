import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfilePage from '../../pages/profilePage';
import './style.css';

const Main = () => (
  <main className="main-layout">
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route path="/:id" component={ProfilePage} />
    </Switch>
  </main>
);

export default Main;