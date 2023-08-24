import csrfFetch from 'api';
import setChat from './setChat';

const getChat = (chatId) => async (dispatch) => {
  const response = await csrfFetch(`/api/chats/${chatId}`);

  const data = await response.json();
  dispatch(setChat(data.chat, data.interlocutor));
  return response;
};

export default getChat;
