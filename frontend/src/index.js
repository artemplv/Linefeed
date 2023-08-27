/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import configureStore from 'store';
import { restoreSession } from 'store/actions/session';

import App from './App';

const store = configureStore();

const renderApp = () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

if (sessionStorage.getItem('currentUser') === null
  || sessionStorage.getItem('X-CSRF-Token') === null) {
  store.dispatch(restoreSession()).then(renderApp);
} else {
  renderApp();
}
