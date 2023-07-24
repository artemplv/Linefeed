/* eslint-disable react/prop-types */
import React from 'react';

function TextInput(props) {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
  } = props;

  return (
    <input
      className="input-text"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
