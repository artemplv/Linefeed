import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import restoreSession from './restoreSession';

const signup = (user) => async (dispatch) => {
  try {
    const response = await csrfFetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    if (response.ok) {
      dispatch(restoreSession());
    }
  } catch (err) {
    callAlert.error("Couldn't sign up");
  }
};

export default signup;
