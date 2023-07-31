import React from 'react';
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

export default SidebarLink;
