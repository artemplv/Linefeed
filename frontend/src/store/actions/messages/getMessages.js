import csrfFetch from 'api';
import setMessages from './setMessages';

const getMessages = ({ channelId, chatId }) => async (dispatch) => {
  let url;

  if (channelId) {
    url = `/api/channels/${channelId}/messages`;
  } else {
    url = `/api/chats/${chatId}/messages`;
  }

  const response = await csrfFetch(url);

  const data = await response.json();
  dispatch(setMessages(data.messages));
  return response;
};

export default getMessages;
