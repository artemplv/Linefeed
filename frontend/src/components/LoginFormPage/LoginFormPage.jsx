import React from 'react';

import FormPageWrapper from 'components/shared/FormPageWrapper';
import Form from './Form';

function LoginFormPage() {
  return (
    <FormPageWrapper
      className="signin-form-page"
      sidelink
    >
      <h1 className="heading">Sign in to Linefeed</h1>
      <p className="subheading">
        We suggest using the
        {' '}
        <b>email address you use at work.</b>
      </p>

      <Form />
    </FormPageWrapper>
  );
}

export default LoginFormPage;
