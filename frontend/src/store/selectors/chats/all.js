import {
  createSelector,
} from 'reselect';

const all = createSelector(
  (state) => state.chats.byId,
  (collection) => Object.values(collection || {}),
);

export default all;
