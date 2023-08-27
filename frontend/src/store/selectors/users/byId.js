import {
  createSelector,
} from 'reselect';

const byId = createSelector(
  (state) => state.users.byId,
  (_, userId) => userId,
  (collection, id) => {
    const user = collection[id];

    if (user) {
      user.fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
    }

    return user || {};
  },
);

export default byId;
