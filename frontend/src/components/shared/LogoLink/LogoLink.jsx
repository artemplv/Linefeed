import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.svg';

function LogoLink(props) {
  const {
    variant,
    size,
  } = props;

  return (
    <div className={`logo-container logo-${variant} logo-${size}`}>
      <Link to="/">
        <img src={logo} alt="logo" />
        <span>
          linefeed
        </span>
      </Link>
    </div>
  );
}

LogoLink.defaultProps = {
  variant: 'light',
  size: 'm',
};

LogoLink.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['xs', 's', 'm']),
};

export default LogoLink;
