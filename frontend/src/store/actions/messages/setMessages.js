import {
  SET_MESSAGES,
} from 'store/actionTypes/messages';

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export default setMessages;
