import {
  SET_CHAT,
} from 'store/actionTypes/chats';

const setChat = (chat, interlocutor) => ({
  type: SET_CHAT,
  payload: chat,
  interlocutor,
});

export default setChat;
