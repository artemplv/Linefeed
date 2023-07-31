import {
  SET_CHANNEL,
} from 'store/actionTypes/channels';

const setChannel = (channel) => ({
  type: SET_CHANNEL,
  payload: channel,
});

export default setChannel;
