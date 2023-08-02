import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { closeModal } from 'store/actions/modal';
import { messages } from 'api';

import Button from 'components/shared/Button';

function DeleteMessage() {
  const dispatch = useDispatch();

  const modalData = useSelector((state) => state.ui.modal.data);

  const onCancel = () => {
    dispatch(closeModal());
  };

  const handleSubmit = async () => {
    await messages.deleteMessage(modalData?.messageId);
    dispatch(closeModal());
  };

  return (
    <div className="delete-message-modal-content">
      <h1 className="modal-heading">
        Delete message
      </h1>

      <p>
        Delete this message?
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

export default DeleteMessage;
