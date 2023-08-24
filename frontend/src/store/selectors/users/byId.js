import {
  createSelector,
} from 'reselect';

const byId = createSelector(
  (state) => state.users.byId,
  (_, userId) => userId,
  (collection, id) => collection[id] || {},
);

export default byId;
