import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from 'components/shared/Avatar';
import SidebarLink from 'components/WorkspaceLayout/Sidebar/SidebarLink';

function ChatItem(props) {
  const {
    workspaceId,
    chatId, // user id for now
    chatName,
  } = props;

  const sessionUserId = useSelector((state) => state.session.user?.id);
  const isSelf = Number(chatId) === sessionUserId;

  const chatPic = useSelector((state) => state.users.byId[chatId]?.pictureUrl);

  return (
    <SidebarLink
      to={`/workspaces/${workspaceId}/chats/${chatId}`}
    >
      <Avatar
        src={chatPic}
        size="xs"
      />
      <span className="chat-name">
        {chatName}
      </span>
      {
        isSelf && (
          <span className="self-user-hint">
            you
          </span>
        )
      }
    </SidebarLink>
  );
}

export default ChatItem;
