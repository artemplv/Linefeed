import csrfFetch from 'api';
import setWorkspace from './setWorkspace';

const updateWorkspace = (id) => (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/workspaces/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });

  const body = await response.json();
  dispatch(setWorkspace(body.workspace));
  return response;
};

export default updateWorkspace;
