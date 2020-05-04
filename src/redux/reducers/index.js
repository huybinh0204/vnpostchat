import {createStore, combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import changeIconReducer from './changeIconReducer';
import tickBoxReducer from './tickBoxReducer';
export default combineReducers({
  LoginReducer,
  changeIconReducer,
  tickBoxReducer,
});
