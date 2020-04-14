import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getProblemsSuccess, getProblemsFailure } from './actions';

export function* getProblems({ payload }) {
  try {
    const { page } = payload;

    const response = yield call(api.get, '/delivery/problems', {
      params: {
        page,
      },
    });

    yield put(getProblemsSuccess(response.data));
  } catch (error) {
    toast.error('Falha na requisição, atualize a página');
    yield put(getProblemsFailure());
  }
}

export default all([takeLatest('@problems/GET_REQUEST', getProblems)]);
