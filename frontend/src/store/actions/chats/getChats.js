import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setChats from './setChats';

const getChats = (workspaceId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/workspaces/${workspaceId}/chats`);

    const data = await response.json();
    dispatch(setChats(data.chats));
    return response;
  } catch (err) {
    callAlert.error("Couldn't get chats");
    return null;
  }
};

export default getChats;
