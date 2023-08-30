import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import removeChannel from './removeChannel';

const deleteChannel = (channelId) => async (dispatch) => {
  try {
    await csrfFetch(`/api/channels/${channelId}`, {
      method: 'DELETE',
    });

    dispatch(removeChannel(channelId));
  } catch (err) {
    callAlert.error("Couldn't delete channel");
  }
};

export default deleteChannel;
