import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import logo from 'assets/images/slack-logo-full.svg';

function FormPageWrapper(props) {
  const {
    className,
    sidelink,
    children,
  } = props;

  return (
    <div className={`form-page ${className}`}>
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
                  className="link bold"
                >
                  Create an account
                </Link>
              </div>
            )
          }
        </div>
      </header>

      <main className="form-page-main-wrapper">
        {children}
      </main>
    </div>
  );
}

FormPageWrapper.defaultProps = {
  className: '',
  sidelink: false,
};

FormPageWrapper.propTypes = {
  className: PropTypes.string,
  sidelink: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default FormPageWrapper;
