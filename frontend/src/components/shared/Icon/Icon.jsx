import React from 'react';
import PropTypes from 'prop-types';

import * as Feather from 'react-feather';

import { pascalCase } from 'change-case';

function Icon(props) {
  const {
    name,
    className,
  } = props;

  const FeatherIcon = Feather[pascalCase(name)];

  if (!FeatherIcon) {
    return null;
  }

  return (
    <i className={`svg-icon ${className}`}>
      <FeatherIcon
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </i>
  );
}

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
