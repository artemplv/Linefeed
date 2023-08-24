import {
  createSelector,
} from 'reselect';

import byId from './byId';

const messages = createSelector(
  byId,
  (chat) => chat.messages || [],
);

export default messages;
