import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setWorkspace from './setWorkspace';

const updateWorkspace = (id) => (data) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/workspaces/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });

    const body = await response.json();
    dispatch(setWorkspace(body.workspace));
    return response;
  } catch (err) {
    callAlert.error("Couldn't update workspace");
    return null;
  }
};

export default updateWorkspace;
