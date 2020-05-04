import {watchCheckLogin} from './loginSaga';
import {put, takeLatest, all} from 'redux-saga/effects';

export default function*() {
  yield all([watchCheckLogin()]);
}
