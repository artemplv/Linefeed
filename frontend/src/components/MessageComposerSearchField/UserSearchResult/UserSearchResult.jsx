import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { userById } from 'store/selectors/users';
import { allChats } from 'store/selectors/chats';
import { createChat } from 'store/actions/chats';

import Avatar from 'components/shared/Avatar';

function UserSearchResult(props) {
  const {
    userId,
    workspaceId,
  } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => userById(state, userId));
  const chats = useSelector(allChats);

  const handleClick = async () => {
    const chat = chats.find(({ interlocutorId }) => interlocutorId === user.id);

    if (chat) {
      navigate(`/workspaces/${workspaceId}/chats/${chat.id}`);
    } else {
      const { chat: newChat } = await dispatch(createChat(workspaceId)({ interlocutorId: user.id }));

      navigate(`/workspaces/${workspaceId}/chats/${newChat.id}`);
    }
  };

  return (
    <button
      type="button"
      className="search-result-item no-margin"
      onMouseDown={handleClick}
    >
      <Avatar
        src={user.pictureUrl}
        size="xs"
      />
      <span>
        {user.fullName}
      </span>
    </button>
  );
}

UserSearchResult.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserSearchResult;
