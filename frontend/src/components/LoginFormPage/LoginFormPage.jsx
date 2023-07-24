import React, { useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import { login } from 'store/actions/session';

import TextInput from 'components/TextInput';
import Button from 'components/Button';

import './style.scss';

import logo from 'assets/images/slack-logo-full.svg';

function LoginFormPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);

    const body = {
      credential: email,
      password,
    };

    try {
      await dispatch(login(body));
    } catch (res) {
      const data = await res.json();
      setErrors(data.errors);
    }
  };

  return (
    <div className="signin-form-page">
      <header>
        <div className="left-col" />
        <div className="center-col">
          <Link to="/">
            <img src={logo} height={26} alt="logo" />
          </Link>
        </div>
        <div className="right-col">
          <div className="sidelink">
            New to Slack?
            <br />
            <Link
              to="/signup"
              className="bold"
            >
              Create an account
            </Link>
          </div>
        </div>
      </header>

      <main>
        <h1 className="heading">Sign in to Slack</h1>
        <p className="subheading">
          We suggest using the
          {' '}
          <b>email address you use at work.</b>
        </p>

        <form onSubmit={handleSubmit}>
          <ul>
            {
            errors.map((msg) => (
              <li key={msg}>{msg}</li>
            ))
          }
          </ul>

          <TextInput
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@work-email.com"
          />

          <TextInput
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />

          <Button submit>
            Sign In With Email
          </Button>
        </form>
      </main>

    </div>
  );
}

export default LoginFormPage;
