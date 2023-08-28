import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuLink(props) {
  const {
    children,
    to,
    onClick,
  } = props;

  return (
    <Link
      to={to}
      className="dropdown-menu-link"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

MenuLink.defaultProps = {
  onClick: () => {},
};

MenuLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MenuLink;
