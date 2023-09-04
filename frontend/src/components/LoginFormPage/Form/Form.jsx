import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDispatch,
} from 'react-redux';

import { validate } from 'utils';
import { login } from 'store/actions/session';

import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';
import Spin from 'components/shared/Spin';

const demoUserCreds = { credential: 'johndoe@example.com', password: 'password' };

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    let formValid = true;
    const formErrors = {};

    const fieldsToValidate = [
      { name: 'email', value: email },
      { name: 'password', value: password },
    ];

    fieldsToValidate.forEach((field) => {
      if (!field.value) {
        formErrors[field.name] = 'This field is required';
        formValid = false;
      }
    });

    setErrors(formErrors);
    return formValid;
  };

  const validateField = (event, fieldName, fieldType) => {
    const { value } = event.target;

    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: 'This field is required',
      }));
      return false;
    }

    if (fieldType === 'email' && !validate.email(value)) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: 'Email is invalid format',
      }));
      return false;
    }

    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: null,
      }));
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const body = {
      credential: email,
      password,
    };

    try {
      await dispatch(login(body));

      navigate('/workspaces');
    } catch (res) {
      const data = await res.json();
      const errorMessage = data.errors ? data.errors[0] : null;
      setErrors({
        password: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (callback) => (event, fieldName, fieldType) => {
    callback(event.target.value);

    if (errors[fieldName]) {
      validateField(event, fieldName, fieldType);
    }
  };

  const loginDemoUser = async () => {
    setLoading(true);

    await dispatch(login(demoUserCreds));

    setLoading(false);

    navigate('/workspaces');
  };

  return (
    <Spin spinning={loading}>
      <form onSubmit={handleSubmit}>
        <TextInput
          name="email"
          type="email"
          value={email}
          onChange={handleFieldChange(setEmail)}
          placeholder="name@work-email.com"
          onBlur={validateField}
          error={errors.email}
        />

        <TextInput
          name="password"
          type="password"
          value={password}
          onChange={handleFieldChange(setPassword)}
          placeholder="Password"
          onBlur={validateField}
          error={errors.password}
        />

        <Button
          submit
          variant="dark"
        >
          Sign In With Email
        </Button>

        <Button
          onClick={loginDemoUser}
          variant="light"
        >
          Demo Login
        </Button>
      </form>
    </Spin>
  );
}

export default Form;
