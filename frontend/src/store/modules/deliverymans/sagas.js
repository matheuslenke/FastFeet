import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  getDeliverymansSuccess,
  getDeliverymansFailure,
  storeDeliverymansSuccess,
  storeDeliverymansFailure,
  updateDeliverymansSuccess,
  updateDeliverymansFailure,
} from './actions';

export function* getDeliverymans({ payload }) {
  try {
    const { page, name } = payload;

    const response = yield call(api.get, 'deliverymans', {
      params: {
        page,
        name,
      },
    });

    yield put(getDeliverymansSuccess(response.data));
  } catch (error) {
    toast.error('Falha na requisição, atualize a página');
    yield put(getDeliverymansFailure());
  }
}

export function* storeDeliverymans({ payload }) {
  try {
    const { name, email, avatar_id } = payload.data;

    const response = yield call(api.post, 'deliverymans', {
      name,
      email,
      avatar_id,
    });

    toast.success('Entregador cadastrado com sucesso!');

    yield put(storeDeliverymansSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao cadastrar entregador, tente novamente');
    yield put(storeDeliverymansFailure());
  }
}

export function* updateDeliverymans({ payload }) {
  try {
    const { name, email, avatar_id, deliveryman_id } = payload.deliveryman;

    const response = yield call(api.put, `Deliverymans/${deliveryman_id}`, {
      name,
      email,
      avatar_id,
    });

    toast.success('Entregador atualizado com sucesso!');

    yield put(updateDeliverymansSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar entregador, tente novamente');
    yield put(updateDeliverymansFailure());
  }
}

export default all([
  takeLatest('@deliverymans/GET_REQUEST', getDeliverymans),
  takeLatest('@deliverymans/STORE_REQUEST', storeDeliverymans),
  takeLatest('@deliverymans/UPDATE_REQUEST', updateDeliverymans),
]);
