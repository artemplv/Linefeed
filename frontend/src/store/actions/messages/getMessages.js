import csrfFetch from 'api';
import setMessages from './setMessages';

const getMessages = (workspaceId, channelId) => async (dispatch) => {
  const response = await csrfFetch(`/api/workspaces/${workspaceId}/messages?channel_id=${channelId}`);

  const data = await response.json();
  dispatch(setMessages(data.messages));
  return response;
};

export default getMessages;
