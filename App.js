import React, {Component} from 'react';
import createSagaMiddleware from 'redux-saga';
import store from './src/redux/stores';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Main from './src/navigators/Main'
import FirstApp from './src/containers/LoginContainer';

export default class MyApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
