import {
  SET_WORKSPACE,
} from 'store/actionTypes/workspaces';

const setWorkspace = (workspace) => ({
  type: SET_WORKSPACE,
  payload: workspace,
});

export default setWorkspace;
