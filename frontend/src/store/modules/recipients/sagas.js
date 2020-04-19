import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';
// import history from '~/services/history';

import {
  getRecipientsSuccess,
  getRecipientsFailure,
  updateRecipientsSuccess,
  updateRecipientsFailure,
  storeRecipientsSuccess,
  storeRecipientsFailure,
} from './actions';

export function* getRecipients({ payload }) {
  try {
    const { page, name } = payload;

    const response = yield call(api.get, 'recipients', {
      params: {
        name,
        page,
      },
    });
    yield put(getRecipientsSuccess(response.data));
  } catch (error) {
    toast.error('Falha na requisição, atualize a página');
    yield put(getRecipientsFailure());
  }
}

export function* updateRecipient({ payload }) {
  try {
    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
      recipient_id,
    } = payload.data;

    yield call(api.put, `recipients/${recipient_id}`, {
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });

    yield put(updateRecipientsSuccess());
    toast.success('Destinatário atualizado com sucesso');
  } catch (error) {
    yield put(updateRecipientsFailure());
    toast.error('Falha ao atualizar destinatário');
  }
}

export function* storeRecipient({ payload }) {
  try {
    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = payload.data;

    yield call(api.post, `recipients`, {
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });

    yield put(storeRecipientsSuccess());
    toast.success('Destinatário salvo com sucesso');
  } catch (error) {
    yield put(storeRecipientsFailure());
    toast.error('Falha ao salvar destinatário');
  }
}

export default all([
  takeLatest('@recipients/GET_REQUEST', getRecipients),

  takeLatest('@recipients/UPDATE_REQUEST', updateRecipient),
  takeLatest('@recipients/STORE_REQUEST', storeRecipient)
]);
