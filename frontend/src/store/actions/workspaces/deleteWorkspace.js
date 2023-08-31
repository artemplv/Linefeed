import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import removeWorkspace from './removeWorkspace';

const deleteWorkspace = (workspaceId) => async (dispatch) => {
  try {
    await csrfFetch(`/api/workspaces/${workspaceId}`, {
      method: 'DELETE',
    });

    dispatch(removeWorkspace(workspaceId));
    callAlert.success('Workspace deleted');
  } catch (err) {
    callAlert.error("Couldn't delete workspace");
  }
};

export default deleteWorkspace;
