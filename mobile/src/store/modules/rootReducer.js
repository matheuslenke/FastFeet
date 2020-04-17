import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import orders from './orders/reducer';
import recipients from './recipients/reducer';
import problems from './problems/reducer';
import deliverymans from './deliverymans/reducer';

export default combineReducers({
  auth,
  user,
  orders,
  recipients,
  deliverymans,
  problems,
});
