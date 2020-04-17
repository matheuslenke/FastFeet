import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

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
    Alert.alert('Falha', 'Falha na requisição, atualize a página');
    yield put(getProblemsFailure());
  }
}

export default all([takeLatest('@problems/GET_REQUEST', getProblems)]);
