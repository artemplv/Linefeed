import React, { useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from 'store/actions/session';

function SignupFormPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
      firstName,
      lastName,
      email,
      password,
    };

    try {
      await dispatch(signup(body));
    } catch (res) {
      const data = await res.json();
      setErrors(data.errors);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {
            errors.map((msg) => (
              <li key={msg}>{msg}</li>
            ))
          }
        </ul>

        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="First name"
          />
        </label>

        <br />

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Last name"
          />
        </label>

        <br />

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

        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
}

export default SignupFormPage;
