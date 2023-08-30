import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setCurrentUser from './setCurrentUser';

const login = (user) => async (dispatch) => {
  const {
    credential,
    password,
  } = user;

  try {
    const response = await csrfFetch('/api/session', {
      method: 'POST',
      body: JSON.stringify({
        credential,
        password,
      }),
    });

    const data = await response.json();
    dispatch(setCurrentUser(data.user));
    return response;
  } catch (err) {
    callAlert.error("Couldn't sign in");
    return null;
  }
};

export default login;
