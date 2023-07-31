import {
  combineReducers,
} from 'redux';

import sessionReducer from './session';
import workspacesReducer from './workspaces';
import usersReducer from './users';
import channelsReducer from './channels';

const rootReducer = combineReducers({
  session: sessionReducer,
  workspaces: workspacesReducer,
  users: usersReducer,
  channels: channelsReducer,
});

export default rootReducer;
