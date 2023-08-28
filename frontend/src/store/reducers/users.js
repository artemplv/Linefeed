import {
  SET_USER,
  SET_USERS,
} from 'store/actionTypes/users';

import {
  SET_CHAT,
} from 'store/actionTypes/chats';

import { CLEAR_WORKSPACE } from 'store/actionTypes/workspaces';

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
        byId: {
          ...state.byId,
          ...action.payload,
        },
      };
    case SET_CHAT:
      if (!action.interlocutor) {
        return state;
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.interlocutor.id]: action.interlocutor,
        },
      };
    case CLEAR_WORKSPACE:
      return initialState;
    default:
      return state;
  }
};

export default usersReducer;
