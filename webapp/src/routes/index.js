import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { AuthScene, EmployeeScene, AdminDashboardScene } from "@scenes";
// import SampleScene from "@scenes/SampleScene";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={AdminDashboardScene} />
      <Route path="/login" exact component={AuthScene} />
      <Route path="/employee" exact component={EmployeeScene} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
