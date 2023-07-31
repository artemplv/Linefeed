import csrfFetch from 'api';
import setUsers from 'store/actions/users/setUsers';

const getWorkspaceUsers = (workspaceId) => async (dispatch) => {
  const response = await csrfFetch(`/api/workspaces/${workspaceId}/users`);

  const data = await response.json();
  dispatch(setUsers(data.users));
  return response;
};

export default getWorkspaceUsers;
