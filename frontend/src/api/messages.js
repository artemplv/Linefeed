/* eslint-disable import/prefer-default-export */
import csrfFetch from './csrfFetch';

export const createMessage = ({ channelId, chatId }) => async (payload = {}) => {
  let url;

  if (channelId) {
    url = `/api/channels/${channelId}/messages`;
  } else {
    url = `/api/chats/${chatId}/messages`;
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
