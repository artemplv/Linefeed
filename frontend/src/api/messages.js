/* eslint-disable import/prefer-default-export */
import { callAlert } from 'components/Alert';

import csrfFetch from './csrfFetch';

export const createMessage = (workspaceId, { channelId, chatId }) => async (payload = {}) => {
  let url;

  if (channelId) {
    url = `/api/workspaces/${workspaceId}/channels/${channelId}/messages`;
  } else {
    url = `/api/workspaces/${workspaceId}/chats/${chatId}/messages`;
  }

  try {
    const response = await csrfFetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const body = await response.json();
    return body;
  } catch (err) {
    callAlert.error("Couldn't send message");
    return null;
  }
};

export const deleteMessage = async (messageId) => {
  try {
    await csrfFetch(`/api/messages/${messageId}`, {
      method: 'DELETE',
    });

    callAlert.success('Message deleted');
  } catch (err) {
    callAlert.error("Couldn't delete message");
  }
};
