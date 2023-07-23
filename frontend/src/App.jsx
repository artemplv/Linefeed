import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import LoginFormPage from 'components/LoginFormPage';
import SignupFormPage from 'components/SignupFormPage';
import LogoutButton from 'components/LogoutButton';

function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginFormPage} />
      <Route path="/signup" component={SignupFormPage} />

      <Route exact path="/">
        <>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>

            <LogoutButton />
          </div>
          <h1>
            Hello from App
          </h1>
        </>
      </Route>
      <Route path="/">
        <h2>
          404 Not Found
        </h2>
      </Route>
    </Switch>
  );
}

export default App;
