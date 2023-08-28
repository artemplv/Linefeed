import React, {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import PropTypes from 'prop-types';

import { getChats } from 'store/actions/chats';
import { openModal } from 'store/actions/modal';

import { allChats } from 'store/selectors/chats';

import Button from 'components/shared/Button';

import ChatItem from './ChatItem';

function ChatsSection(props) {
  const {
    workspaceId,
  } = props;

  const dispatch = useDispatch();

  const chats = useSelector(allChats);

  useEffect(() => {
    if (workspaceId) {
      dispatch(getChats(workspaceId));
    }
  }, [workspaceId]);

  const handleAddUsers = () => {
    dispatch(openModal('add-workspace-users'));
  };

  return (
    <div className="chats-list">
      <h4>Direct messages</h4>
      {
        chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chatId={chat.id}
            workspaceId={workspaceId}
          />
        ))
      }

      <Button
        className="add-users-button"
        onClick={handleAddUsers}
      >
        + Add Coworkers
      </Button>
    </div>
  );
}

ChatsSection.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ChatsSection;
