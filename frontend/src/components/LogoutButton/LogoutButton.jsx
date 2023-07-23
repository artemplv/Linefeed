import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { logout } from 'store/actions/session';

function LogoutButton() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return null;
  }

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
