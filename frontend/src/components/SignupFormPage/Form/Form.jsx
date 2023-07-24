import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from 'store/actions/session';

import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

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
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="First name"
      />

      <TextInput
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Last name"
      />

      <TextInput
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />

      <Button submit>
        Sign Up
      </Button>
    </form>
  );
}

export default Form;
