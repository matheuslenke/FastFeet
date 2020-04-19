import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Orders from '../pages/Orders';
import OrdersForm from '../pages/Orders/Form';
import OrdersEdit from '../pages/Orders/Edit';

import DeliveryMan from '../pages/DeliveryMan';
import DeliveryManForm from '../pages/DeliveryMan/Form';
import DeliveryManEdit from '../pages/DeliveryMan/Edit';

import Recipients from '../pages/Recipients';
import RecipientsForm from '../pages/Recipients/Form';
import RecipientsEdit from '../pages/Recipients/Edit';

import Problems from '../pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" exact component={Orders} isPrivate />
      <Route path="/orders/new" component={OrdersForm} isPrivate />
      <Route path="/orders/edit" component={OrdersEdit} isPrivate />

      <Route path="/deliverymans" exact component={DeliveryMan} isPrivate />
      <Route path="/deliverymans/new" component={DeliveryManForm} isPrivate />
      <Route path="/deliverymans/edit" component={DeliveryManEdit} isPrivate />

      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipients/new" component={RecipientsForm} isPrivate />
      <Route path="/recipients/edit" component={RecipientsEdit} isPrivate />

      <Route path="/problems" exact component={Problems} isPrivate />
      {/*
      <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
