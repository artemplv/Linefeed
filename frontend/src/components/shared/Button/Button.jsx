import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    onClick,
    children,
    submit,
    variant,
    disabled,
    className,
  } = props;

  return (
    <button
      className={`button ${variant} ${disabled ? 'disabled' : ''} ${className}`}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  submit: false,
  variant: '',
  disabled: false,
  className: '',
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  submit: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
