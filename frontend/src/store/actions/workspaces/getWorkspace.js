import csrfFetch from 'api';

import { callAlert } from 'components/Alert';

import setWorkspace from './setWorkspace';

const getWorkspace = (id) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/workspaces/${id}`);

    const data = await response.json();
    dispatch(setWorkspace(data.workspace));
    return response;
  } catch (err) {
    callAlert.error("Couldn't get workspace");
    return null;
  }
};

export default getWorkspace;
