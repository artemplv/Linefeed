/* eslint-disable react/prop-types */
import React from 'react';

import sprite from 'assets/icons/feather-sprite.svg';

function Icon(props) {
  const {
    name,
    className = '',
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

export default Icon;
