import React from 'react';

import {
  useParams,
  useNavigate,
} from 'react-router-dom';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { closeModal } from 'store/actions/modal';
import { deleteChat } from 'store/actions/chats';

import Button from 'components/shared/Button';

function DeleteChat() {
  const {
    workspaceId,
  } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalData = useSelector((state) => state.ui.modal.data);

  const onCancel = () => {
    dispatch(closeModal());
  };

  const handleSubmit = async () => {
    await dispatch(deleteChat(modalData.chatId));
    dispatch(closeModal());
    navigate(`/workspaces/${workspaceId}`);
  };

  return (
    <div className="delete-chat-modal-content">
      <h1 className="modal-heading">
        Delete chat
      </h1>

      <p>
        {`Delete this conversation with ${modalData.chatName}?`}
      </p>

      <div className="buttons-row">
        <Button
          variant="secondary-default"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="error"
          onClick={handleSubmit}
        >
          Delete
        </Button>
      </div>

    </div>
  );
}

export default DeleteChat;
