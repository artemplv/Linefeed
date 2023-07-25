const emailRegexp = '^[a-z0-9._%+-]+@([a-z0-9]+[\.])+[a-z]{2,}$';

const validateEmail = (value) => {
  const regexp = new RegExp(emailRegexp, 'u');

  return regexp.test(value);
};

const validatePassword = (value) => value.length >= 6;

const validate = {
  email: validateEmail,
  password: validatePassword,
};

export default validate;
