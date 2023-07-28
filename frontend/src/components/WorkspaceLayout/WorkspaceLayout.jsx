import React from 'react';
import { Outlet } from 'react-router-dom';

import TopNav from './TopNav';
import Sidebar from './Sidebar';

function WorkspaceLayout() {
  return (
    <div className="workspace-layout">
      <TopNav />

      <Sidebar />

      <div className="workspace-primary-view" role="group">
        <div className="workspace-primary-view-contents">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default WorkspaceLayout;
