import {
  REMOVE_CHANNEL,
} from 'store/actionTypes/channels';

const removeChannel = (channelId) => ({
  type: REMOVE_CHANNEL,
  payload: channelId,
});

export default removeChannel;
