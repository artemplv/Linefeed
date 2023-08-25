import {
  SET_MESSAGE,
} from 'store/actionTypes/messages';

const setMessage = (message, {
  channelId = null,
  chatId = null,
}) => ({
  type: SET_MESSAGE,
  payload: message,
  channelId,
  chatId,
});

export default setMessage;
