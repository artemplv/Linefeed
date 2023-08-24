import {
  combineReducers,
} from 'redux';

import sessionReducer from './session';
import workspacesReducer from './workspaces';
import usersReducer from './users';
import channelsReducer from './channels';
import chatsReducer from './chats';
import messagesReducer from './messages';
import uiReducer from './ui';

const rootReducer = combineReducers({
  session: sessionReducer,
  workspaces: workspacesReducer,
  users: usersReducer,
  channels: channelsReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  ui: uiReducer,
});

export default rootReducer;
