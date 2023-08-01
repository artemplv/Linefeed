/* eslint-disable import/prefer-default-export */
import csrfFetch from './csrfFetch';

export const createMessage = (workspaceId, channelId) => async (payload = {}) => {
  const response = await csrfFetch(`/api/workspaces/${workspaceId}/messages?channel_id=${channelId}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  return body;
};
