/* eslint-disable no-case-declarations */
import {
  SET_CHAT,
  SET_CHATS,
  REMOVE_CHAT,
} from 'store/actionTypes/chats';

import {
  SET_MESSAGE,
  REMOVE_MESSAGE,
} from 'store/actionTypes/messages';

import { CLEAR_WORKSPACE } from 'store/actionTypes/workspaces';

const initialState = {
  byId: {},
  // allIds: {},
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };
    case SET_CHATS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.payload,
        },
      };
    case REMOVE_CHAT:
      const newState = {
        ...state,
        byId: { ...state.byId },
      };

      delete newState.byId[action.payload];
      return newState;
    case SET_MESSAGE:
      if (!action.chatId) {
        return state;
      }

      const chatReceivedMessage = state.byId[action.chatId];

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.chatId]: {
            ...chatReceivedMessage,
            messages: [...chatReceivedMessage.messages, action.payload.id],
          },
        },
      };
    case REMOVE_MESSAGE:
      if (!action.chatId) {
        return state;
      }

      const chatRemovedMessage = state.byId[action.chatId];

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.chatId]: {
            ...chatRemovedMessage,
            messages: chatRemovedMessage.messages.filter((messageId) => messageId !== action.payload),
          },
        },
      };
    case CLEAR_WORKSPACE:
      return initialState;
    default:
      return state;
  }
};

export default chatsReducer;
