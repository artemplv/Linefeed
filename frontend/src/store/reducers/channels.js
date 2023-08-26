/* eslint-disable no-case-declarations */
import {
  SET_CHANNEL,
  SET_CHANNELS,
  REMOVE_CHANNEL,
} from 'store/actionTypes/channels';

import {
  SET_MESSAGE,
  REMOVE_MESSAGE,
} from 'store/actionTypes/messages';

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
        byId: {
          ...state.byId,
          ...action.payload,
        },
      };
    case REMOVE_CHANNEL:
      const newState = {
        ...state,
        byId: { ...state.byId },
      };

      delete newState.byId[action.payload];
      return newState;
    case SET_MESSAGE:
      if (!action.channelId) {
        return state;
      }

      const channelReceivedMessage = state.byId[action.channelId];

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.channelId]: {
            ...channelReceivedMessage,
            messages: [...channelReceivedMessage.messages, action.payload.id],
          },
        },
      };
    case REMOVE_MESSAGE:
      if (!action.channelId) {
        return state;
      }

      const channelRemovedMessage = state.byId[action.channelId];

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.channelId]: {
            ...channelRemovedMessage,
            messages: channelRemovedMessage.messages.filter((messageId) => messageId !== action.payload),
          },
        },
      };
    default:
      return state;
  }
};

export default channelsReducer;
