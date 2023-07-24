import React, { useState } from 'react';
import {
  useDispatch,
} from 'react-redux';

import { login } from 'store/actions/session';

import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

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
  );
}

export default Form;
