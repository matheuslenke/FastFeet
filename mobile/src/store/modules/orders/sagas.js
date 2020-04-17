import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

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
        name,
      },
    });

    yield put(getOrdersSuccess(response.data));
  } catch (error) {
    Alert.alert('Falha', 'Falha na requisição, atualize a página');
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

    Alert.alert('Sucesso!', 'Encomenda cadastrada');

    yield put(postOrdersSuccess(response.data));
  } catch (error) {
    Alert.alert('Falha', 'Erro ao cadastrar encomenda, tente novamente');
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

    Alert.alert('Sucesso!', 'Encomenda atualizada');

    yield put(updateOrdersSuccess(response.data));
  } catch (error) {
    Alert.alert('Falha', 'Erro ao atualizar encomenda, tente novamente');
    yield put(updateOrdersFailure());
  }
}

export default all([
  takeLatest('@orders/GET_REQUEST', getOrders),
  takeLatest('@orders/POST_REQUEST', postOrders),
  takeLatest('@orders/UPDATE_REQUEST', updateOrders),
]);
