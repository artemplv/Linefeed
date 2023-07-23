import {
  restoreCSRF,
} from 'api';
import {
  storeCurrentUser,
} from 'utils';
import setCurrentUser from './setCurrentUser';

const restoreSession = () => async (dispatch) => {
  const res = await restoreCSRF();
  const body = await res.json();
  storeCurrentUser(body.user);
  dispatch(setCurrentUser(body.user));
  return res;
};

export default restoreSession;
