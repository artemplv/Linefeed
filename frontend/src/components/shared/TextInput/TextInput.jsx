import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/shared/Icon';

function TextInput(props) {
  const {
    value,
    name,
    onChange,
    placeholder,
    type,
    error,
    onBlur,
  } = props;

  const handleChange = (event) => {
    onChange(event, name, type);
  };

  const handleBlur = (event) => {
    onBlur(event, name, type);
  };

  return (
    <div className="input-text-wrapper">
      <input
        name={name}
        className={`input-text ${error ? 'error' : ''}`}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
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

TextInput.defaultProps = {
  placeholder: 'Start typing',
  type: 'text',
  error: null,
  name: '',
  onBlur: () => {},
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  onBlur: PropTypes.func,
};

export default TextInput;
