import React, {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getChat } from 'store/actions/chats';

import { chatById } from 'store/selectors/chats';
import { userById } from 'store/selectors/users';

import Avatar from 'components/shared/Avatar';
import SidebarLink from 'components/WorkspaceLayout/Sidebar/SidebarLink';

function ChatItem(props) {
  const {
    workspaceId,
    chatId,
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId) {
      dispatch(getChat(chatId));
    }
  }, [chatId]);

  const sessionUserId = useSelector((state) => state.session.user?.id);
  const chat = useSelector((state) => chatById(state, chatId));
  const interlocutor = useSelector((state) => userById(state, chat.interlocutorId));

  const isSelf = Number(chat.interlocutorId) === sessionUserId;

  const chatPic = interlocutor?.pictureUrl;
  const chatName = `${interlocutor?.firstName || ''} ${interlocutor?.lastName || ''}`.trim();

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
