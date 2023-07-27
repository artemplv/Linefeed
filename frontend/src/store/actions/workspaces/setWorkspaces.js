import {
  SET_WORKSPACES,
} from 'store/actionTypes/workspaces';

const setWorkspaces = (workspaces) => ({
  type: SET_WORKSPACES,
  payload: workspaces,
});

export default setWorkspaces;
