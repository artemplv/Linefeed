import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setChat from './setChat';

const getChat = (chatId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/chats/${chatId}`);

    const data = await response.json();
    dispatch(setChat(data.chat, data.interlocutor));
    return response;
  } catch (err) {
    callAlert.error("Couldn't get chat");
    return null;
  }
};

export default getChat;
