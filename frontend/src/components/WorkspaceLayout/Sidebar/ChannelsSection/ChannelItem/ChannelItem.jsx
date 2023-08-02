import React from 'react';

import SidebarLink from 'components/WorkspaceLayout/Sidebar/SidebarLink';
import Icon from 'components/shared/Icon';

function ChannelItem(props) {
  const {
    channelId,
    workspaceId,
    name,
  } = props;

  return (
    <SidebarLink
      to={`/workspaces/${workspaceId}/channels/${channelId}`}
    >
      <Icon name="hash" />

      <span className="channel-name">{name}</span>
    </SidebarLink>
  );
}

export default ChannelItem;
