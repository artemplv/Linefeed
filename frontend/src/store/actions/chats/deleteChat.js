import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import removeChat from './removeChat';

const deleteChat = (chatId) => async (dispatch) => {
  try {
    await csrfFetch(`/api/chats/${chatId}`, {
      method: 'DELETE',
    });

    dispatch(removeChat(chatId));
    callAlert.success('Chat deleted');
  } catch (err) {
    callAlert.error("Couldn't delete chat");
  }
};

export default deleteChat;
