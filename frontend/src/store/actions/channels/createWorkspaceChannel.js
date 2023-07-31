import csrfFetch from 'api';
import setChannel from './setChannel';

const createWorkspaceChannel = (workspaceId) => (payload = {}) => async (dispatch) => {
  const response = await csrfFetch(`/api/workspaces/${workspaceId}/channels`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  dispatch(setChannel(body.channel));
  return body;
};

export default createWorkspaceChannel;
