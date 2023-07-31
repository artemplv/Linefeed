import {
  combineReducers,
} from 'redux';

import sessionReducer from './session';
import workspacesReducer from './workspaces';
import usersReducer from './users';

const rootReducer = combineReducers({
  users: usersReducer,
  workspaces: workspacesReducer,
  session: sessionReducer,
});

export default rootReducer;
