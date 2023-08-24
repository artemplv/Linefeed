import {
  createSelector,
} from 'reselect';

const byId = createSelector(
  (state) => state.chats.byId,
  (_, chatId) => chatId,
  (collection, id) => collection[id] || {},
);

export default byId;
