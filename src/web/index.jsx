import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducer from './reducer';
// import App from './App';

// let store = createStore(reducer);
const store = createStore(x => x);

render (
  <Provider store={store}>
    <div />
    {/* <App /> */}
  </Provider>, document.body
);
