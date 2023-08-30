import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setChannel from './setChannel';

const createWorkspaceChannel = (workspaceId) => (payload = {}) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/workspaces/${workspaceId}/channels`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const body = await response.json();
    dispatch(setChannel(body.channel));
    return body;
  } catch (err) {
    callAlert.error("Couldn't create channel");
    return null;
  }
};

export default createWorkspaceChannel;
