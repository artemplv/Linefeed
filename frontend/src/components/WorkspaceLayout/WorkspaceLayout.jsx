import React, {
  useState,
  useEffect,
} from 'react';
import {
  Outlet,
  useParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getWorkspace } from 'store/actions/workspaces';

import { DEFAULT_SIDEBAR_SECTIONS } from 'constants/sidebar';

import Modal from 'components/Modal';
import TopNav from './TopNav';
import Sidebar from './Sidebar';

function WorkspaceLayout() {
  const [workspaceCreationMode, setWorkspaceCreationMode] = useState(false);
  const [sidebarSections, setSidebarSections] = useState(DEFAULT_SIDEBAR_SECTIONS);

  const { workspaceId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (workspaceId) {
      dispatch(getWorkspace(workspaceId));
    }
  }, [workspaceId]);

  return (
    <div className="workspace-layout">
      <TopNav />

      <Sidebar
        workspaceId={workspaceId}
        sections={sidebarSections}
        creationView={workspaceCreationMode}
      />

      <div className="workspace-primary-view" role="group">
        <div className="workspace-primary-view-contents">
          <Outlet
            context={{
              setWorkspaceCreationMode,
              setSidebarSections,
            }}
          />
        </div>
      </div>

      <Modal />
    </div>
  );
}

export default WorkspaceLayout;
