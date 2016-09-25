import React from 'react';
import { render } from 'react-dom';
import BankAppContainer from 'components/app.jsx';
import { Provider } from 'react-redux';
import store from 'stores/store';
import actions from 'actions/actions';

store.dispatch( actions.ws.connect() );

render(
  <Provider store={store}>
    <BankAppContainer />
  </Provider>,
  document.getElementById('root')
);