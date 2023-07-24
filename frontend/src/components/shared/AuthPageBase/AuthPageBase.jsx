/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Redirect,
  Link,
} from 'react-router-dom';

import logo from 'assets/images/slack-logo-full.svg';

function AuthPageBase(props) {
  const {
    className = '',
    sidelink,
    children,
  } = props;

  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={`auth-page ${className}`}>
      <header>
        <div className="left-col" />

        <div className="center-col">
          <Link to="/">
            <img src={logo} height={26} alt="logo" />
          </Link>
        </div>

        <div className="right-col">
          {
            sidelink && (
              <div className="sidelink">
                New to Slack?
                <br />
                <Link
                  to="/signup"
                  className="bold"
                >
                  Create an account
                </Link>
              </div>
            )
          }
        </div>
      </header>

      <main className="auth-page-main-wrapper">
        {children}
      </main>
    </div>
  );
}

export default AuthPageBase;
