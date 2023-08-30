import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setChannels from './setChannels';

const getWorkspaceChannels = (workspaceId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/workspaces/${workspaceId}/channels`);

    const data = await response.json();
    dispatch(setChannels(data.channels));
    return response;
  } catch (err) {
    callAlert.error("Couldn't get channels");
    return null;
  }
};

export default getWorkspaceChannels;
