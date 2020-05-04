import {put, takeEvery} from 'redux-saga/effects';
import {
  ACTION_CHECK_LOGIN,
  ACTION_LISTEN_LOGIN,
  ERROR,
  SUCCESS,
} from '../actions/actionTypes';
import * as callApi from '../../untils/apiCheckLogin';

export function* checkLogin({username, password}) {
  // cai nay la luc dau dua du lieu ve mac dinh
  // xem ben reducer
  yield put({type: ACTION_CHECK_LOGIN});

  var response;
  response = yield callApi._callApiPost({user_name: username, password});

  if (response.data != null && response.error == 1) {

    yield put({type: SUCCESS, value: response});
  } else {
    yield put({type: ERROR, value: response});
  }
}

export function* watchCheckLogin() {

  yield takeEvery(ACTION_LISTEN_LOGIN, checkLogin);
}
