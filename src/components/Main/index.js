import React from 'react';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={() => <h1>HOLA</h1>} />
    </Switch>
  </main>
);

export default Main;