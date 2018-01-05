import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import App from './App';

const { DEV } = process.env;

const middlewares = DEV ? applyMiddleware(thunkMiddleware, createLogger()) : applyMiddleware(thunkMiddleware);

const store = createStore(reducer, composeWithDevTools(middlewares));

render (
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
