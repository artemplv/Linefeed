import {
  SET_CHANNELS,
} from 'store/actionTypes/channels';

const setChannels = (channels) => ({
  type: SET_CHANNELS,
  payload: channels,
});

export default setChannels;
