import csrfFetch from 'api';
import setChats from './setChats';

const getChats = (workspaceId) => async (dispatch) => {
  const response = await csrfFetch(`/api/workspaces/${workspaceId}/chats`);

  const data = await response.json();
  dispatch(setChats(data.chats));
  return response;
};

export default getChats;
