import csrfFetch from 'api';
import storeCurrentUser from 'utils/storeCurrentUser';

import { LOGOUT_USER } from 'store/actionTypes/session';

const logout = () => async (dispatch) => {
  await csrfFetch('/api/session', {
    method: 'DELETE',
  });

  storeCurrentUser(null);
  dispatch({ type: LOGOUT_USER });
};

export default logout;
