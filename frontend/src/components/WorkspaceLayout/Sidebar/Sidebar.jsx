import React from 'react';
import PropTypes from 'prop-types';

import {
  WORKSPACE_SIDEBAR_SECTION,
  CHANNELS_SIDEBAR_SECTION,
  CHATS_SIDEBAR_SECTION,
} from 'constants/sidebar';

import WorkspaceSection from './WorkspaceSection';
import ChannelsSection from './ChannelsSection';
import ChatsSection from './ChatsSection';

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
          <ChannelsSection
            workspaceId={workspaceId}
            full={!creationView}
          />
        )
      }
      {
        sections.includes(CHATS_SIDEBAR_SECTION) && (
          <ChatsSection
            workspaceId={workspaceId}
          />
        )
      }
    </div>
  );
}

Sidebar.defaultProps = {
  creationView: false,
  sections: [],
};

Sidebar.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sections: PropTypes.arrayOf(PropTypes.string),
  creationView: PropTypes.bool,
};

export default Sidebar;
