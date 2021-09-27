import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { AuthScene } from "@scenes";
import SampleScene from "@scenes/SampleScene";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SampleScene} />
      <Route path="/login" exact component={AuthScene} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
