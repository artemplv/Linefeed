import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setChat from './setChat';

const createChat = (workspaceId) => (payload = {}) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/workspaces/${workspaceId}/chats`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const body = await response.json();
    dispatch(setChat(body.chat));
    return body;
  } catch (err) {
    callAlert.error("Couldn't create chat");
    return null;
  }
};

export default createChat;
