import csrfFetch from 'api';

import { callAlert } from 'components/Alert';

import setWorkspace from './setWorkspace';

const createWorkspace = (payload = {}) => async (dispatch) => {
  try {
    const response = await csrfFetch('/api/workspaces', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const body = await response.json();
    dispatch(setWorkspace(body.workspace));
    return body;
  } catch (err) {
    callAlert.error("Couldn't create workspace");
    return null;
  }
};

export default createWorkspace;
