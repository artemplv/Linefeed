import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setUsers from 'store/actions/users/setUsers';

const getWorkspaceUsers = (workspaceId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/workspaces/${workspaceId}/users`);

    const data = await response.json();
    dispatch(setUsers(data.users));
    return response;
  } catch (err) {
    callAlert.error("Couldn't get workspace users");
    return null;
  }
};

export default getWorkspaceUsers;
