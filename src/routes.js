import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;