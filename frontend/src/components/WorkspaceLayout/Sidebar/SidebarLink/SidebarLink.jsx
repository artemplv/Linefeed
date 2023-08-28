import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

function SidebarLink(props) {
  const {
    to,
    children,
  } = props;

  return (
    <NavLink
      to={to}
      className="sidebar-navlink-wrapper"
    >
      {children}
    </NavLink>
  );
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SidebarLink;
