/* eslint-disable no-case-declarations */
import {
  SET_CHANNEL,
  SET_CHANNELS,
  REMOVE_CHANNEL,
} from 'store/actionTypes/channels';

const initialState = {
  byId: {},
  // allIds: {},
};

const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNEL:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };
    case SET_CHANNELS:
      return {
        ...state,
        byId: action.payload,
      };
    case REMOVE_CHANNEL:
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

export default channelsReducer;
