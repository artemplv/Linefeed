import {
  REMOVE_MESSAGE,
} from 'store/actionTypes/messages';

const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  payload: messageId,
});

export default removeMessage;
