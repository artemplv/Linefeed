/* eslint-disable import/prefer-default-export */
import csrfFetch from './csrfFetch';

export const createMessage = (workspaceId, { channelId, chatId }) => async (payload = {}) => {
  let url;

  if (channelId) {
    url = `/api/workspaces/${workspaceId}/channels/${channelId}/messages`;
  } else {
    url = `/api/workspaces/${workspaceId}/chats/${chatId}/messages`;
  }

  const response = await csrfFetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  return body;
};

export const deleteMessage = async (messageId) => {
  await csrfFetch(`/api/messages/${messageId}`, {
    method: 'DELETE',
  });
};
