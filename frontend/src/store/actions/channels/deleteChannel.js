import csrfFetch from 'api';
import removeChannel from './removeChannel';

const deleteChannel = (channelId) => async (dispatch) => {
  await csrfFetch(`/api/channels/${channelId}`, {
    method: 'DELETE',
  });

  dispatch(removeChannel(channelId));
};

export default deleteChannel;
