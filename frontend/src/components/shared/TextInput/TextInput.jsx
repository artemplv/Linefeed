/* eslint-disable react/prop-types */
import React from 'react';

import Icon from 'components/shared/Icon';

function TextInput(props) {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
    error,
  } = props;

  return (
    <div className="input-text-wrapper">
      <input
        className={`input-text ${error ? 'error' : ''}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {
        error && (
          <div className="input-text-alert">
            <Icon
              name="alert-circle"
              className="alert-icon"
            />
            <span>{error}</span>
          </div>
        )
      }
    </div>
  );
}

export default TextInput;
