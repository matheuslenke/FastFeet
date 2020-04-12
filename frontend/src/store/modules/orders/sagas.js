import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  getOrdersSuccess,
  getOrdersFailure,
  postOrdersSuccess,
  postOrdersFailure,
  updateOrdersSuccess,
  updateOrdersFailure,
} from './actions';

export function* getOrders({ payload }) {
  try {
    const { page, name } = payload;

    const response = yield call(api.get, 'orders', {
      params: {
        page,
        q: name,
      },
    });

    yield put(getOrdersSuccess(response.data));
  } catch (error) {
    toast.error('Falha na requisição, atualize a página');
    yield put(getOrdersFailure());
  }
}

export function* postOrders({ payload }) {
  try {
    const { deliveryman, recipient, product } = payload;

    const body = {
      deliveryman_id: deliveryman,
      recipient_id: recipient,
      product,
    };

    const response = yield call(api.post, 'orders', body);

    toast.success('Encomenda cadastrada com sucesso!');

    yield put(postOrdersSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao cadastrar encomenda, tente novamente');
    yield put(postOrdersFailure());
  }
}

export function* updateOrders({ payload }) {
  try {
    const { deliveryman_id, recipient_id, product, orderId } = payload;

    const body = {
      deliveryman_id,
      recipient_id,
      product,
    };

    const response = yield call(api.put, `orders/${orderId}`, body);

    toast.success('Encomenda atualizada com sucesso!');

    yield put(updateOrdersSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar encomenda, tente novamente');
    console.tron.log(error);
    yield put(updateOrdersFailure());
  }
}

export default all([
  takeLatest('@orders/GET_REQUEST', getOrders),
  takeLatest('@orders/POST_REQUEST', postOrders),
  takeLatest('@orders/UPDATE_REQUEST', updateOrders),
]);
