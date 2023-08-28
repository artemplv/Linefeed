import React from 'react';
import PropTypes from 'prop-types';

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

ChannelItem.propTypes = {
  channelId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
};

export default ChannelItem;
