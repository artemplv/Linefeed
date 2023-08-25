import {
  REMOVE_MESSAGE,
} from 'store/actionTypes/messages';

const removeMessage = (messageId, {
  channelId = null,
  chatId = null,
}) => ({
  type: REMOVE_MESSAGE,
  payload: messageId,
  channelId,
  chatId,
});

export default removeMessage;
