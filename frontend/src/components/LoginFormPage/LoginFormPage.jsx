import React, { useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from 'store/actions/session';

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
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {
            errors.map((msg) => (
              <li key={msg}>{msg}</li>
            ))
          }
        </ul>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
        </label>

        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </label>

        <br />

        <input type="submit" value="Log In" />
      </form>
    </>
  );
}

export default LoginFormPage;
