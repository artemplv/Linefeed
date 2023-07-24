/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {
  const {
    onClick = () => {},
    children,
    submit = false,
  } = props;

  return (
    <button
      className="button"
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
