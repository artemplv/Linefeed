import React, {
  useState,
  useEffect,
} from 'react';
import {
  Outlet,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  getWorkspace,
  clearWorkspace,
} from 'store/actions/workspaces';

import { DEFAULT_SIDEBAR_SECTIONS } from 'constants/sidebar';

import Modal from 'components/Modal';
import TopNav from './TopNav';
import Sidebar from './Sidebar';

function WorkspaceLayout() {
  const [workspaceCreationMode, setWorkspaceCreationMode] = useState(false);
  const [sidebarSections, setSidebarSections] = useState(DEFAULT_SIDEBAR_SECTIONS);

  const { workspaceId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkspace = async (id) => {
      if (id) {
        const res = await dispatch(getWorkspace(id));
        if (!res) {
          navigate('/404', { replace: true });
        }
      }
    };

    fetchWorkspace(workspaceId);

    return () => {
      dispatch(clearWorkspace());
    };
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
