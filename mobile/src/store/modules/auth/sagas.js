import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { parseISO, format } from 'date-fns';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { deliveryman_id } = payload;

    const response = yield call(api.get, `deliveryman/${deliveryman_id}`);

    const { id, name, email, avatar_id, createdAt } = response.data;

    const user = {
      id,
      name,
      email,
      avatar_id,
      createdAt: format(parseISO(createdAt), "dd'/'MM'/'yyyy"),
    };

    yield put(signInSuccess(user));

    // history.push('orders');
  } catch (error) {
    Alert.alert('Falha', 'Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
