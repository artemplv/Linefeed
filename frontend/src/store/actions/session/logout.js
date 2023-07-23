import csrfFetch from 'api';
import storeCurrentUser from 'utils/storeCurrentUser';
import removeCurrentUser from './removeCurrentUser';

const logout = () => async (dispatch) => {
  await csrfFetch('/api/session', {
    method: 'DELETE',
  });

  storeCurrentUser(null);
  dispatch(removeCurrentUser());
};

export default logout;
