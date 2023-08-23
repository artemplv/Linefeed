import {
  createSelector,
} from 'reselect';

const byId = createSelector(
  (state) => state.channels.byId,
  (_, channelId) => channelId,
  (collection, id) => collection[id] || {},
);

export default byId;
