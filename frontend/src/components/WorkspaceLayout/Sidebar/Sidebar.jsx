import React from 'react';

import {
  WORKSPACE_SIDEBAR_SECTION,
  CHANNELS_SIDEBAR_SECTION,
  CHATS_SIDEBAR_SECTION,
} from 'constants/sidebar';

import WorkspaceSection from './WorkspaceSection';

function Sidebar(props) {
  const {
    workspaceId,
    sections,
    creationView,
  } = props;

  return (
    <div className="workspace-sidebar">
      {
        sections.includes(WORKSPACE_SIDEBAR_SECTION)
          ? (
            <WorkspaceSection
              workspaceId={workspaceId}
            />
          ) : <WorkspaceSection.Placeholder />
      }
      {
        sections.includes(CHANNELS_SIDEBAR_SECTION) && (
          <h4>Channels</h4>
        )
      }
      {
        sections.includes(CHATS_SIDEBAR_SECTION) && (
          <h4>Chats</h4>
        )
      }
      <br />
      <br />
      <ul>
        {
          sections.map((section) => (
            <li key={section}>{section}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Sidebar;
