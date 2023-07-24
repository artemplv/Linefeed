import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/shared/Button';
import { logout } from 'store/actions/session';

function LogoutButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Button
      onClick={handleClick}
      variant="secondary"
    >
      Sign Out
    </Button>
  );
}

export default LogoutButton;
