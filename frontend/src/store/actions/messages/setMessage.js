import {
  SET_MESSAGE,
} from 'store/actionTypes/messages';

const setMessage = (message, { channelId = null }) => ({
  type: SET_MESSAGE,
  payload: message,
  channelId,
});

export default setMessage;
