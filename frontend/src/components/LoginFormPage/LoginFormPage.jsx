import React from 'react';

import AuthPageBase from 'components/shared/AuthPageBase';
import Form from './Form';

function LoginFormPage() {
  return (
    <AuthPageBase
      className="signin-form-page"
      sidelink
    >
      <h1 className="heading">Sign in to Slack</h1>
      <p className="subheading">
        We suggest using the
        {' '}
        <b>email address you use at work.</b>
      </p>

      <Form />
    </AuthPageBase>
  );
}

export default LoginFormPage;
