import React from 'react';

import {
  useParams,
  useNavigate,
} from 'react-router-dom';

import Icon from 'components/shared/Icon';

function NewMessageButton() {
  const {
    workspaceId,
  } = useParams();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/workspaces/${workspaceId}/chats/new`);
  };

  return (
    <button
      type="button"
      className="new-message-button"
      onClick={handleClick}
    >
      <Icon name="edit" />
    </button>
  );
}

export default NewMessageButton;
