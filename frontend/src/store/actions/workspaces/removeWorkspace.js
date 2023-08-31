import {
  REMOVE_WORKSPACE,
} from 'store/actionTypes/workspaces';

const removeWorkspace = (workspaceId) => ({
  type: REMOVE_WORKSPACE,
  payload: workspaceId,
});

export default removeWorkspace;
