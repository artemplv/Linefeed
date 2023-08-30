import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setWorkspaces from './setWorkspaces';

const getWorkspaces = () => async (dispatch) => {
  try {
    const response = await csrfFetch('/api/workspaces');

    const data = await response.json();
    dispatch(setWorkspaces(data.workspaces));
    return response;
  } catch (err) {
    callAlert.error("Couldn't get workspaces");
    return null;
  }
};

export default getWorkspaces;
