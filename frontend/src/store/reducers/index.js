import {
  combineReducers,
} from 'redux';

import { LOGOUT_USER } from 'store/actionTypes/session';

import sessionReducer from './session';
import workspacesReducer from './workspaces';
import usersReducer from './users';
import channelsReducer from './channels';
import chatsReducer from './chats';
import messagesReducer from './messages';
import uiReducer from './ui';

const appReducer = combineReducers({
  session: sessionReducer,
  workspaces: workspacesReducer,
  users: usersReducer,
  channels: channelsReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  ui: uiReducer,
});

const rootReducer = (state, action) => {
  // reset store on logout
  if (action.type === LOGOUT_USER) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
