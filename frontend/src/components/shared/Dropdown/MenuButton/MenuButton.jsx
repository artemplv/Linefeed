import React from 'react';
import PropTypes from 'prop-types';

function MenuButton(props) {
  const {
    children,
    onClick,
  } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="dropdown-menu-button"
    >
      {children}
    </button>
  );
}

MenuButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
