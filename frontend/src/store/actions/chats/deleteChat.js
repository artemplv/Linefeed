import csrfFetch from 'api';
import removeChat from './removeChat';

const deleteChat = (chatId) => async (dispatch) => {
  await csrfFetch(`/api/chats/${chatId}`, {
    method: 'DELETE',
  });

  dispatch(removeChat(chatId));
};

export default deleteChat;
