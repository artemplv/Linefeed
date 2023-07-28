import csrfFetch from 'api';
import setWorkspace from './setWorkspace';

const createWorkspace = (payload = {}) => async (dispatch) => {
  const response = await csrfFetch('/api/workspaces', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  dispatch(setWorkspace(body.workspace));
  return body;
};

export default createWorkspace;
