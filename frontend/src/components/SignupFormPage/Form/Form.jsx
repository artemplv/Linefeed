import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from 'store/actions/session';
import { validate } from 'utils';

import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

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

    if (fieldType === 'password' && !validate.password(value)) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: 'Password is too short (minimum is 6 characters)',
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

  const validateForm = () => {
    let formValid = true;
    const formErrors = {};
    const fieldsToValidate = [
      { name: 'email', value: email, type: 'email' },
      { name: 'firstName', value: firstName },
      { name: 'lastName', value: lastName },
      { name: 'password', value: password, type: 'password' },
    ];

    fieldsToValidate.forEach((field) => {
      if (field.type && validate[field.type]) {
        const validFormat = validate[field.type](field.value);
        if (!validFormat) {
          formErrors[field.name] = `${field.name} is invalid format`;
          formValid = false;
        }
      }
      if (!field.value) {
        formErrors[field.name] = 'This field is required';
        formValid = false;
      }
    });

    setErrors(formErrors);
    return formValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

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
      setErrors(data.errorFields);
    }
  };

  const handleFieldChange = (callback) => (event, fieldName, fieldType) => {
    callback(event.target.value);

    if (errors[fieldName]) {
      validateField(event, fieldName, fieldType);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="email"
        type="email"
        value={email}
        onChange={handleFieldChange(setEmail)}
        placeholder="name@work-email.com"
        error={errors.email}
        onBlur={validateField}
      />

      <TextInput
        name="firstName"
        type="text"
        value={firstName}
        onChange={handleFieldChange(setFirstName)}
        placeholder="First name"
        error={errors.firstName}
        onBlur={validateField}
      />

      <TextInput
        name="lastName"
        type="text"
        value={lastName}
        onChange={handleFieldChange(setLastName)}
        placeholder="Last name"
        error={errors.lastName}
        onBlur={validateField}
      />

      <TextInput
        name="password"
        type="password"
        value={password}
        onChange={handleFieldChange(setPassword)}
        placeholder="Password"
        error={errors.password}
        onBlur={validateField}
      />

      <Button submit>
        Sign Up
      </Button>
    </form>
  );
}

export default Form;
