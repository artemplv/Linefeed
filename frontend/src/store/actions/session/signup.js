import csrfFetch from 'api';
import restoreSession from './restoreSession';

const signup = (user) => async (dispatch) => {
  const response = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
  });

  if (response.ok) {
    dispatch(restoreSession());
  }
};

export default signup;
