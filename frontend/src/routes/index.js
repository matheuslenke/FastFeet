import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import OrdersList from '../pages/Orders/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" component={OrdersList} isPrivate />
      {/*
      <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
