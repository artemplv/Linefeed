import {
  combineReducers,
} from 'redux';

import sessionReducer from './session';
import workspacesReducer from './workspaces';

const rootReducer = combineReducers({
  session: sessionReducer,
  workspaces: workspacesReducer,
});

export default rootReducer;
