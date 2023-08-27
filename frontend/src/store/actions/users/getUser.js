import csrfFetch from 'api';
import setUser from './setUser';

const getUser = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}`);

  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export default getUser;
