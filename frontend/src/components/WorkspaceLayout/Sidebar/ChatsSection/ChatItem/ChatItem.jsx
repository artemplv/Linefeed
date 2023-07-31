import React from 'react';

import Avatar from 'components/shared/Avatar';
import SidebarLink from 'components/WorkspaceLayout/Sidebar/SidebarLink';

function ChatItem(props) {
  const {
    workspaceId,
    chatId,
    chatName,
  } = props;

  return (
    <SidebarLink
      to={`/workspaces/${workspaceId}/chats/${chatId}`}
    >
      <Avatar
        size="xs"
      />
      <span>
        {chatName}
      </span>
    </SidebarLink>
  );
}

export default ChatItem;
