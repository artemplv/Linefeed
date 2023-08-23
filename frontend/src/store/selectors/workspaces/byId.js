import {
  createSelector,
} from 'reselect';

const byId = createSelector(
  (state) => state.workspaces.byId,
  (_, workspaceId) => workspaceId,
  (collection, id) => collection[id] || {},
);

export default byId;
