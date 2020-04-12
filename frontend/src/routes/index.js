import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Orders from '../pages/Orders';
import OrdersForm from '../pages/Orders/Form';
import OrdersEdit from '../pages/Orders/Edit';

import DeliveryMan from '../pages/DeliveryMan';
import DeliveryManForm from '../pages/DeliveryMan/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" exact component={Orders} isPrivate />
      <Route path="/orders/new" component={OrdersForm} isPrivate />
      <Route path="/orders/edit" component={OrdersEdit} isPrivate />
      <Route path="/deliverymans" exact component={DeliveryMan} isPrivate />
      <Route path="/deliverymans/new" component={DeliveryManForm} isPrivate />
      {/*
      <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
