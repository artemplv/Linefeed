import {
  SET_CHATS,
} from 'store/actionTypes/chats';

const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export default setChats;
