import {
  createSelector,
} from 'reselect';

const all = createSelector(
  (state) => state.users.byId,
  (collection) => Object.values(collection || {}),
);

export default all;
