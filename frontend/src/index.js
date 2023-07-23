/* eslint-disable react/jsx-filename-extension */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { restoreCSRF } from './api';

import App from './App';

import configureStore from './store';

const store = configureStore();

const renderApplication = () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  );
};

if (sessionStorage.getItem('X-CSRF-Token') === null) {
  restoreCSRF().then(renderApplication);
} else {
  renderApplication();
}
