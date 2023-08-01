import csrfFetch from 'api';
import setChannel from './setChannel';

const updateChannel = (channelId) => (payload = {}) => async (dispatch) => {
  const response = await csrfFetch(`/api/channels/${channelId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  dispatch(setChannel(body.channel));
  return body;
};

export default updateChannel;
