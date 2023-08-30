import csrfFetch from 'api';
import { callAlert } from 'components/Alert';

import setUsers from 'store/actions/users/setUsers';
import setChannels from 'store/actions/channels/setChannels';

const searchWorkspace = (
  workspaceId,
  searchQuery,
  callback = () => {},
) => async (dispatch) => {
  try {
    const url = `/api/workspaces/${workspaceId}/search?query=${searchQuery}`;

    const response = await csrfFetch(url);

    const body = await response.json();

    dispatch(setUsers(body.users));
    dispatch(setChannels(body.channels));

    callback(body);

    return body;
  } catch (err) {
    callAlert.error("Couldn't search");
    return null;
  }
};

export default searchWorkspace;
