import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setWorkspace from './setWorkspace';

const updateWorkspace = (id, successAlert = false) => (data) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/workspaces/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });

    const body = await response.json();
    dispatch(setWorkspace(body.workspace));

    if (successAlert) {
      callAlert.success('Workspace updated');
    }
    return response;
  } catch (err) {
    callAlert.error("Couldn't update workspace");
    return null;
  }
};

export default updateWorkspace;
