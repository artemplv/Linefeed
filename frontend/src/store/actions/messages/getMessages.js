import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setMessages from './setMessages';

const getMessages = ({ channelId, chatId }) => async (dispatch) => {
  let url;

  if (channelId) {
    url = `/api/channels/${channelId}/messages`;
  } else {
    url = `/api/chats/${chatId}/messages`;
  }

  try {
    const response = await csrfFetch(url);

    const data = await response.json();
    dispatch(setMessages(data.messages));
    return response;
  } catch (err) {
    callAlert.error("Couldn't get messages");
    return null;
  }
};

export default getMessages;
