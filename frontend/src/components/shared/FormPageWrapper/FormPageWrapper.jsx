import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import LogoLink from 'components/shared/LogoLink';

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
          <LogoLink
            size="s"
            variant="dark"
          />
        </div>

        <div className="right-col">
          {
            sidelink && (
              <div className="sidelink">
                New to Linefeed?
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
  children: oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default FormPageWrapper;
