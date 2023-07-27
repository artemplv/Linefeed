import csrfFetch from 'api';
import setWorkspace from './setWorkspace';

const getWorkspace = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/workspaces/${id}`);

  const data = await response.json();
  dispatch(setWorkspace(data.workspace));
  return response;
};

export default getWorkspace;
