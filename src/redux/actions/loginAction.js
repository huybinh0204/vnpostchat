import {ACTION_CHECK_LOGIN, ACTION_LISTEN_LOGIN} from './actionTypes';

export function LoginAcc(username, password) {
  return {type: ACTION_LISTEN_LOGIN, username: username, password: password};
}
