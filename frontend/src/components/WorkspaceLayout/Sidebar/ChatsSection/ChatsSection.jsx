import React, {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getWorkspaceUsers } from 'store/actions/workspaces';

import ChatItem from './ChatItem';

function ChatsSection(props) {
  const {
    workspaceId,
  } = props;

  const dispatch = useDispatch();

  const users = useSelector((state) => Object.values(state.users.byId));

  useEffect(() => {
    if (workspaceId) {
      dispatch(getWorkspaceUsers(workspaceId));
    }
  }, [workspaceId]);

  return (
    <div style={{ padding: '1rem' }}>
      <h4>Chats</h4>
      {
        users.map((user) => (
          <ChatItem
            key={user.id}
            workspaceId={workspaceId}
            chatId={user.id}
            chatName={`${user.firstName} ${user.lastName}`}
          />
        ))
      }
    </div>
  );
}

export default ChatsSection;
