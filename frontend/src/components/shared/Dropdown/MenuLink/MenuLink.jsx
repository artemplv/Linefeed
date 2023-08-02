import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuLink(props) {
  const {
    children,
    to,
  } = props;

  return (
    <Link
      to={to}
      className="dropdown-menu-link"
    >
      {children}
    </Link>
  );
}

MenuLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuLink;
