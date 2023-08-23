import {
  createSelector,
} from 'reselect';

import byId from './byId';

const channelMessages = createSelector(
  byId,
  (channel) => channel.messages || [],
);

export default channelMessages;
