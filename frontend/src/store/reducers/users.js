import {
  SET_USER,
  SET_USERS,
} from 'store/actionTypes/users';

const initialState = {
  byId: {},
  // allIds: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };
    case SET_USERS:
      return {
        ...state,
        byId: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
