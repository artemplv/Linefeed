import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  withoutAuth,
} from 'components/hocs/secureWrapper';

import HomePage from 'components/HomePage';
import LoginFormPage from 'components/LoginFormPage';
import SignupFormPage from 'components/SignupFormPage';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route path="/signin" component={withoutAuth(LoginFormPage)} />

      <Route path="/signup" component={withoutAuth(SignupFormPage)} />

      <Route exact path="/" component={withoutAuth(HomePage)} />

      <Route path="/">
        <h2>
          404 Not Found
        </h2>
      </Route>
    </Switch>
  );
}

export default App;
