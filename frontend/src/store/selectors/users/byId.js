const byId = (state, userId) => state.users.byId[userId] || {};

export default byId;
