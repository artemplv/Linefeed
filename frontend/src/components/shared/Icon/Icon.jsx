import React from 'react';
import PropTypes from 'prop-types';

import sprite from 'assets/icons/feather-sprite.svg';

function Icon(props) {
  const {
    name,
    className,
  } = props;

  return (
    <i className={`svg-icon ${className}`}>
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <use href={`${sprite}#${name}`} />
      </svg>
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
