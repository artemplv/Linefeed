import csrfFetch from 'api';
import setCurrentUser from './setCurrentUser';

const login = (user) => async (dispatch) => {
  const {
    credential,
    password,
  } = user;

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
};

export default login;
