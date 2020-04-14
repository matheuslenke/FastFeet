import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import orders from './orders/sagas';
import recipients from './recipients/sagas';
import deliverymans from './deliverymans/sagas';
import problems from './problems/sagas';

export default function* rootSaga() {
  return yield all([auth, user, orders, recipients, deliverymans, problems]);
}
