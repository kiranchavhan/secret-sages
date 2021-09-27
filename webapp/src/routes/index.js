import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import SampleScene from '@scenes/SampleScene';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={SampleScene} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
