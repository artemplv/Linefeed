import {
  createSelector,
} from 'reselect';

const all = createSelector(
  (state) => state.workspaces.byId,
  (collection) => Object.values(collection || {}),
);

export default all;
