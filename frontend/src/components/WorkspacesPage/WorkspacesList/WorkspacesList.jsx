import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getWorkspaces } from 'store/actions/workspaces';

import WorkspaceItem from '../WorkspaceItem';

function WorkspacesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkspaces());
  }, []);

  const sessionUser = useSelector((state) => state.session.user);
  const workspaces = useSelector((state) => Object.values(state.workspaces.byId || {}));

  return (
    <div className="workspaces-list">
      <div className="workspaces-list-title-bar">
        {`Workspaces for ${sessionUser?.email || ''}`}
      </div>
      <div className="workspaces-list-content">
        {
          workspaces.map((workspace) => (
            <WorkspaceItem key={workspace.id} workspaceId={workspace.id} />
          ))
        }
      </div>
    </div>
  );
}

export default WorkspacesList;
