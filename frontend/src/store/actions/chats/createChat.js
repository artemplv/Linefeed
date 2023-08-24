import csrfFetch from 'api';
import setChat from './setChat';

const createChat = (workspaceId) => (payload = {}) => async (dispatch) => {
  const response = await csrfFetch(`/api/workspaces/${workspaceId}/chats`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  dispatch(setChat(body.chat));
  return body;
};

export default createChat;
