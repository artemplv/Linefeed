import React, {
  useState,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { logout } from 'store/actions/session';

import Dropdown from 'components/shared/Dropdown';
import Avatar from 'components/shared/Avatar';

function User() {
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = useSelector((state) => state.session.user);
  const userName = `${user?.firstName || ''} ${user?.lastName || ''}`.trim();

  const toggleDropdown = () => {
    setDropdownOpen((value) => !value);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    user && (
      <Dropdown
        open={dropdownOpen}
        toggle={toggleDropdown}
        triggerElement={<Avatar size="s" />}
        menuStickTo="right"
      >
        <div className="dropdown-menu-user-data flex-row">
          <Avatar />
          <div>
            <p>
              <b>{userName}</b>
            </p>
            <p className="user-email">
              {user.email}
            </p>
          </div>
        </div>
        <Dropdown.MenuButton onClick={handleLogout}>
          Sign Out
        </Dropdown.MenuButton>
      </Dropdown>
    )
  );
}

export default User;
