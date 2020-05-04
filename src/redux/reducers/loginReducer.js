import {
  ACTION_LISTEN_LOGIN,
  ACTION_CHECK_LOGIN,
  SUCCESS,
  ERROR,
} from '../actions/actionTypes';

const defaultState = {
  data: '',
  isLoading: '',
  error: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_CHECK_LOGIN:
      console.log('CLICK_BUTTON_LOGIN');
      return {...state, data: null, error: -1};

    case SUCCESS:
      console.log('SUCCESS');
      return {...state, data: action.value, error: 1};

    case ERROR:
      console.log('ERROR');
      return {...state, error: 0};

    default:
      return state;
  }
};
