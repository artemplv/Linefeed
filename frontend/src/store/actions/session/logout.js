import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import storeCurrentUser from 'utils/storeCurrentUser';

import { LOGOUT_USER } from 'store/actionTypes/session';

const logout = () => async (dispatch) => {
  try {
    await csrfFetch('/api/session', {
      method: 'DELETE',
    });

    storeCurrentUser(null);
    dispatch({ type: LOGOUT_USER });
  } catch (err) {
    callAlert.error("Couldn't sign out");
  }
};

export default logout;
