/* eslint-disable no-case-declarations */
import {
  SET_MESSAGE,
  SET_MESSAGES,
  REMOVE_MESSAGE,
} from 'store/actionTypes/messages';

const initialState = {
  byId: {},
  // allIds: {},
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };
    case SET_MESSAGES:
      return {
        ...state,
        byId: action.payload,
      };
    case REMOVE_MESSAGE:
      const newState = {
        ...state,
        byId: { ...state.byId },
      };

      delete newState.byId[action.payload];
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
