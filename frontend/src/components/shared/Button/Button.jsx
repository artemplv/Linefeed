import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    onClick,
    children,
    submit,
    variant,
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

Button.defaultProps = {
  onClick: () => {},
  submit: false,
  variant: '',
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  submit: PropTypes.bool,
  variant: PropTypes.string,
};

export default Button;
