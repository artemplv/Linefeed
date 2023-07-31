import csrfFetch from 'api';
import setChannels from './setChannels';

const getWorkspaceChannels = (workspaceId) => async (dispatch) => {
  const response = await csrfFetch(`/api/workspaces/${workspaceId}/channels`);

  const data = await response.json();
  dispatch(setChannels(data.channels));
  return response;
};

export default getWorkspaceChannels;
