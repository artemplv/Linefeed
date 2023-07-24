/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {
  const {
    onClick = () => {},
    children,
    submit = false,
    variant = '',
  } = props;

  return (
    <button
      className={`button ${variant}`}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
