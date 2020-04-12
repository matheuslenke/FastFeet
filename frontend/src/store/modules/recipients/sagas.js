import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';
// import history from '~/services/history';

export function* getRecipients({ payload }) {
  try {
    const { page, name } = payload;

    const response = yield call(api.get, 'recipients', {
      params: {
        q: name,
      },
    });

    yield put();
  } catch (error) {
    toast.error('Falha na requisição, atualize a página');
    yield put();
  }
}

export default all([takeLatest('@recipients/GET_REQUEST', getRecipients)]);
