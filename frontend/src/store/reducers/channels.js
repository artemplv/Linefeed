import {
  SET_CHANNEL,
  SET_CHANNELS,
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
    default:
      return state;
  }
};

export default channelsReducer;
