import { debounceThunkAction } from 'utils';

import getWorkspace from './getWorkspace';
import getWorkspaces from './getWorkspaces';
import createWorkspace from './createWorkspace';
import updateWorkspace from './updateWorkspace';
import getWorkspaceUsers from './getWorkspaceUsers';
import searchWorkspace from './searchWorkspace';
import clearWorkspace from './clearWorkspace';
import deleteWorkspace from './deleteWorkspace';

const searchWorkspaceDebounced = debounceThunkAction(searchWorkspace, 600);

export {
  getWorkspace,
  getWorkspaces,
  createWorkspace,
  updateWorkspace,
  getWorkspaceUsers,
  searchWorkspace,
  searchWorkspaceDebounced,
  clearWorkspace,
  deleteWorkspace,
};
