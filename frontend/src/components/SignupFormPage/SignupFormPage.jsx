import React from 'react';
import { Link } from 'react-router-dom';

import AuthPageBase from 'components/shared/AuthPageBase';
import Form from './Form';

function SignupFormPage() {
  return (
    <AuthPageBase
      className="signup-form-page"
    >
      <h1 className="heading">First, enter your email</h1>
      <p className="subheading">
        We suggest using the
        {' '}
        <b>email address you use at work.</b>
      </p>

      <Form />

      <div className="signin-existing-workspaces">
        Already using Slack?
        <Link
          to="/signin"
          className="bold"
        >
          Sign in to an existing workspace
        </Link>
      </div>
    </AuthPageBase>
  );
}

export default SignupFormPage;
