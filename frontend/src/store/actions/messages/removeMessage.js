import {
  REMOVE_MESSAGE,
} from 'store/actionTypes/messages';

const removeMessage = (messageId, { channelId = null }) => ({
  type: REMOVE_MESSAGE,
  payload: messageId,
  channelId,
});

export default removeMessage;
