import {
  createSelector,
} from 'reselect';

const all = createSelector(
  (state) => state.channels.byId,
  (collection) => Object.values(collection || {}),
);

export default all;
