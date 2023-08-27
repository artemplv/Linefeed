import {
  REMOVE_CHAT,
} from 'store/actionTypes/chats';

const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  payload: chatId,
});

export default removeChat;
