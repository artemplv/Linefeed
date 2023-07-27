import csrfFetch from 'api';
import setWorkspaces from './setWorkspaces';

const getWorkspaces = () => async (dispatch) => {
  const response = await csrfFetch('/api/workspaces');

  const data = await response.json();
  dispatch(setWorkspaces(data.workspaces));
  return response;
};

export default getWorkspaces;
