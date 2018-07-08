import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

import Home from '../home/home';
import Users from '../users/users';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default App;
