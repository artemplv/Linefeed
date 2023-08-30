import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setChannel from './setChannel';

const updateChannel = (channelId) => (payload = {}) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/channels/${channelId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });

    const body = await response.json();
    dispatch(setChannel(body.channel));
    return body;
  } catch (err) {
    callAlert.error("Couldn't update channel");
    return null;
  }
};

export default updateChannel;
